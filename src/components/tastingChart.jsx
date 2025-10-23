import React, { useState, useEffect, useRef } from 'react';
import RatingCircles from './ratingCircle';
import * as d3 from 'd3';

const TastingChart = () => {
const svgRef = useRef(null);
const [data, setData] = useState({
	aroma: {},
	taste: {},
	finish: {}
});

const [starRating, setStarRating] = useState(0);
const [notes, setNotes] = useState('');

const attributes = [
	'DRY TANG', 'FRUIT', 'MELLOW', 'SPICE', 'SMOKE', 'WOOD', 'EARTH',
	'CHEMICAL', 'BITTER', 'UMAMI', 'TART', 'CLEAN', 'STALE', 'NUT'
];

const width = 400;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const radius = 140;
const angleStep = (2 * Math.PI) / attributes.length;

useEffect(() => {
	if (!svgRef.current) return;

	const svg = d3.select(svgRef.current);
	svg.selectAll('*').remove();

	// Draw concentric circles
	const circles = [0.2, 0.4, 0.6, 0.8, 1.0];
	circles.forEach(scale => {
	svg.append('circle')
		.attr('cx', centerX)
		.attr('cy', centerY)
		.attr('r', radius * scale)
		.attr('fill', 'none')
		.attr('stroke', '#e0e0e0')
		.attr('stroke-width', 1);
	});

	// Create text labels
	attributes.forEach((attr, i) => {
	const angle = i * angleStep - Math.PI / 2;
	const x = centerX + Math.cos(angle) * (radius + 40);
	const y = centerY + Math.sin(angle) * (radius + 40);
	
	const words = attr.split(' ');
	const textPath = svg.append('text')
		.attr('x', x)
		.attr('y', y)
		.attr('text-anchor', 'middle')
		.attr('dominant-baseline', 'middle')
		.attr('font-size', '11px')
		.attr('fill', '#666')
		.attr('font-family', 'Courier New, monospace')
		.attr('letter-spacing', '1px');
	
	if (words.length > 1) {
		words.forEach((word, wi) => {
		textPath.append('tspan')
			.attr('x', x)
			.attr('dy', wi === 0 ? 0 : '1.1em')
			.text(word);
		});
	} else {
		textPath.text(attr);
	}
	});

	// Draw data lines
	['aroma', 'taste', 'finish'].forEach(type => {
	const points = [];
	attributes.forEach((attr, i) => {
		const value = data[type][attr] || 0;
		if (value > 0) {
		const angle = i * angleStep - Math.PI / 2;
		const r = (value / 5) * radius;
		const x = centerX + Math.cos(angle) * r;
		const y = centerY + Math.sin(angle) * r;
		points.push([x, y]);
		}
	});

	if (points.length > 1) {
		const lineColor = type === 'aroma' ? '#a7a7a7' : type === 'taste' ? '#555' : '#111';
		// Close the path by adding the first point at the end
		const closedPoints = [...points, points[0]];
		svg.append('path')
		.attr('class', 'data-line')
		.attr('d', d3.line()(closedPoints))
		.attr('fill', 'none')
		.attr('stroke', lineColor)
		.attr('stroke-width', 2)
		.attr('opacity', 0.5);
	}
	});

	// Draw data points
	['aroma', 'taste', 'finish'].forEach(type => {
	attributes.forEach((attr, i) => {
		const value = data[type][attr] || 0;
		if (value > 0) {
		const angle = i * angleStep - Math.PI / 2;
		const r = (value / 5) * radius;
		const x = centerX + Math.cos(angle) * r;
		const y = centerY + Math.sin(angle) * r;

		if (type === 'aroma') {
			svg.append('polygon')
			.attr('points', `${x},${y-6} ${x-5},${y+4} ${x+5},${y+4}`)
			.attr('fill', '#999')
			.style('cursor', 'pointer')
			.on('click', () => handlePointRemove(type, attr));
		} else if (type === 'taste') {
			svg.append('circle')
			.attr('cx', x)
			.attr('cy', y)
			.attr('r', 5)
			.attr('fill', '#666')
			.style('cursor', 'pointer')
			.on('click', () => handlePointRemove(type, attr));
		} else {
			svg.append('rect')
			.attr('x', x - 5)
			.attr('y', y - 5)
			.attr('width', 10)
			.attr('height', 10)
			.attr('fill', '#333')
			.style('cursor', 'pointer')
			.on('click', () => handlePointRemove(type, attr));
		}
		}
	});
	});

		// Click handler for adding points
		svg.on('click', function(event) {
		const [mx, my] = d3.pointer(event);
		const dx = mx - centerX;
		const dy = my - centerY;
		const dist = Math.sqrt(dx * dx + dy * dy);
		
		if (dist < 10 || dist > radius + 30) return;
		
		let angle = Math.atan2(dy, dx) + Math.PI / 2;
		if (angle < 0) angle += 2 * Math.PI;
		
		const index = Math.round(angle / angleStep) % attributes.length;
		const attr = attributes[index];
		
		let type = 'taste';
		if (event.shiftKey) type = 'aroma';
		if (event.ctrlKey || event.metaKey) type = 'finish';
		
		const value = Math.min(5, Math.max(1, Math.round((dist / radius) * 5)));
		
		setData(prevData => ({
			...prevData,
			[type]: { ...prevData[type], [attr]: value }
		}));
		});
	}, [data]);

	const handlePointRemove = (type, attr) => {
		setData(prevData => {
		const newData = { ...prevData };
		delete newData[type][attr];
		return newData;
		});
	};

	return (
		<div className="bg-white p-11 rounded-lg shadow-lg max-w-4xl mx-auto">
		<h2 className="text-2xl tracking-widest mb-8 text-gray-800 font-light">COMPOSITION</h2>
		
		<div className="flex gap-16 items-center mb-8">
			<svg ref={svgRef} width={width} height={height} className="shrink-0" />
			
			<div>
			<RatingCircles attribute="body" label="Body" />
			<RatingCircles attribute="mouthFeel" label="Mouth Feel" />
			<RatingCircles attribute="balance" label="Balance" />
			<RatingCircles attribute="sweetness" label="Sweetness" />
			<RatingCircles attribute="linger" label="Linger" />
			</div>
		</div>
		
		<div className="flex gap-8 text-sm text-gray-600 mb-3">
			<div className="flex items-center gap-2">
			<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-gray-500" />
			<span>Aroma</span>
			</div>
			<div className="flex items-center gap-2">
			<div className="w-2.5 h-2.5 bg-gray-600 rounded-full" />
			<span>Taste</span>
			</div>
			<div className="flex items-center gap-2">
			<div className="w-2.5 h-2.5 bg-gray-800" />
			<span>Finish</span>
			</div>
		</div>

		<div className="text-sm text-gray-400 mb-8 text-left">
			Command/Alt + Click for Finish, Shift + Click for Aroma
		</div>

		<div className="pt-5 border-t border-gray-200">
			<div className="flex justify-between items-center mb-4">
			<h2 className="text-2xl tracking-widest text-gray-800 font-light">NOTES</h2>
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map(rating => (
				<svg
					key={rating}
					onClick={() => setStarRating(rating)}
					className="w-8 h-8 cursor-pointer"
					viewBox="0 0 24 24"
					fill={starRating >= rating ? '#ffd700' : 'none'}
					stroke={starRating >= rating ? '#ffd700' : '#ccc'}
					strokeWidth="2"
				>
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
				</svg>
				))}
			</div>
			</div>
			<textarea
			value={notes}
			onChange={(e) => setNotes(e.target.value)}
			placeholder="Add your tasting notes here..."
			className="w-full min-h-[80px] p-3 border border-gray-300 rounded font-mono text-sm resize-y"
			/>
		</div>
		</div>
	);
	};

	export default TastingChart;