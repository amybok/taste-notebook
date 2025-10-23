import { useState } from "react";

const Notes = () => {
    const [notes, setNotes] = useState('');

    return (
			<textarea
			value={notes}
			onChange={(e) => setNotes(e.target.value)}
			placeholder="Add your tasting notes here..."
			className="w-full min-h-20 p-3 border border-gray-300 rounded font-mono text-sm resize-y"
			/>
    );
};

export default Notes;