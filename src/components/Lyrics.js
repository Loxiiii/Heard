let Lyrics = ({ lyrics }) => {
    const lines = lyrics.split('\n');
    const sections = [];
  
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('[')) {
        // New section found
        const sectionName = lines[i].slice(1, -1);
        const sectionLines = [];
  
        // Collect lines until next section or end of lyrics
        for (i++; i < lines.length && !lines[i].startsWith('['); i++) {
          sectionLines.push(lines[i]);
        }
  
        sections.push({ name: sectionName, lines: sectionLines });
        i--; // Decrement i to account for last iteration in for loop
      }
    }
  
    return (
      <div className="lyrics">
        {sections.map((section, index) => (
          <div key={index} className="lyrics-section">
            <h2 className="font-sans text-lg">{section.name}</h2>
            {section.lines.map((line, index) => (
              <p key={index} className="font-sans text-lg">{line}</p>
            ))}
          </div>
        ))}
      </div>
    );
}

export default Lyrics