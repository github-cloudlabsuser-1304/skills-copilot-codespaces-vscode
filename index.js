import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
                style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
            />
            <div style={{ border: '1px solid #ddd', padding: '10px', width: '50%' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    // Split the sentence into words, reverse the array, and join it back into a string
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

// Example usage:
let input = "hello world this is a test";
let output = reverseSentence(input);
console.log(output); // Output: "Test a is this world hello"