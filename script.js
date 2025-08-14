// Mentor data with role expansions
const mentorData = `Name + Last Initial,Assigned Role,Assigned Day,Assigned Campus,Assigned PM
A'niya L,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Madeleine (madeleine@thebryc.org)
Abby M,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Madeleine (madeleine@thebryc.org)
Adrieanne M,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
Alayna F,LM,Monday,Downtown (460 N 11th St),N/A - Tutor (angela@thebryc.org) - Tutor
Alex A,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Alex C,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Alex T,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Allie D,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Alyssa N,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
Amyia F,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Andrew P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Anthony K,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Ashley B,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org)
Ashley C,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Ashly D,UPM,Tuesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Austin V,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Bailey V,RM,Tuesday,Airline (14141 Airline Hwy Suite B),Mr. Kendrick (kendrick@thebryc.org)
Breante M,SM,Monday,,Ms. Rachel (rachel@thebryc.org)
Camille L,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org)
Cheryl D,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Chris M,SM,Tuesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Chris M,UPM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Christeon L,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Christian G,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Chyna F,LM,Thursday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Cleve V,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
D'Andre T,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
D'Metrie K,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Danaila J,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
Darius Spurlock,SSM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Debra W,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Delores H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Denisha C,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Desiree R,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Destiny C,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Dr. Michelle D,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Elise R,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Esther C,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Esther P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Eternity H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Georgia A,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Grace M,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Halisha A,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Hannah A,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Jacquari R,UPM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org)
Jada N,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Jake C,UPM,Wednesday,Downtown (460 N 11th St),N/A - Tutor (angela@thebryc.org) - Tutor
Jake P,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Jaleah R,RM,Thursday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Jasmine S,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Jay P,UPM,Tuesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Jay S,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Jed K,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Joel S,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Josh H,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Josh U,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Josselyn G,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Julie O,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Kay B,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Kendrell W,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Kenya C,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Kenzie B,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Khadijah X,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Kiersten R,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Kim H,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
KP P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Ladajah B,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Lai C,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Lee Ann L,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Letitia J,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
Lyndsi F,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Mary Julia K,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Melody O,LM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Molly G,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Mondrai H,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Naturi S,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Navy T,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Nikki D,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Nioz R,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Nyria M,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Olivia F,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Pamela R,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Paris T,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Parker S,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org)
Peyton D,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org)
Precious M,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Precious S,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Preston D,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Queen J,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org)
Reina Q,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Richard H,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Rineetha T,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Rock T,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Rodney J,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Sharonda R,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Sierra C,RM,Tuesday,Airline (14141 Airline Hwy Suite B),Mr. Kendrick (kendrick@thebryc.org)
Stephen H,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org)
Stephen M,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Tarralyn C,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Tasha W,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Taylor A,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Taylor F,SM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Tiffani F,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Tomeka P,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org)
Trinity R,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)
Tristan G,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Victoria R,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org)
Viranda K,Tutor,,,N/A - Tutor (angela@thebryc.org) - Tutor
Zee H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org)
Zenora H,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org)
Zoe J,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org)`;

// Role mappings
const roleMapping = {
    'LM': 'Learning Mentor',
    'RM': 'Research Mentor', 
    'UPM': 'Upperclassmen Mentor',
    'SM': 'Senior Mentor',
    'SSM': 'Senior Staff Mentor',
    'Tutor': 'Tutor'
};

// Parse CSV data
function parseCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const entry = {};
        
        headers.forEach((header, index) => {
            entry[header.trim()] = values[index] ? values[index].trim() : '';
        });
        
        data.push(entry);
    }
    
    return data;
}

const mentors = parseCSV(mentorData);

// Filter out incomplete entries
const completeMentors = mentors.filter(mentor => 
    mentor['Name + Last Initial'] && 
    mentor['Assigned Role'] && 
    mentor['Assigned Day'] && 
    mentor['Assigned Campus']
);

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

function normalizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function searchMentors(query) {
    if (!query.trim()) {
        showSuggestions();
        return;
    }

    const normalizedQuery = normalizeString(query);
    const matches = completeMentors.filter(mentor => {
        const normalizedName = normalizeString(mentor['Name + Last Initial']);
        return normalizedName.includes(normalizedQuery) || 
               normalizedName.startsWith(normalizedQuery.split(' ')[0]);
    });

    displayResults(matches, query);
}

function displayResults(matches, query) {
    if (matches.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <h3>No mentors found for "${query}"</h3>
                <p>Please check the spelling and try again.</p>
            </div>`;
        showSuggestions();
        return;
    }

    const resultsHTML = matches.map((mentor, index) => {
        const fullRole = roleMapping[mentor['Assigned Role']] || mentor['Assigned Role'];
        const pm = mentor['Assigned PM'] || 'Not assigned';
        
        return `
            <div class="mentor-card" style="animation-delay: ${index * 0.1}s">
                <div class="mentor-name">${mentor['Name + Last Initial']}</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Day</div>
                        <div class="info-value">${mentor['Assigned Day']}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Campus</div>
                        <div class="info-value">${mentor['Assigned Campus']}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Role</div>
                        <div class="info-value">${fullRole}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Program Manager</div>
                        <div class="info-value">${pm}</div>
                    </div>
                </div>
            </div>`;
    }).join('');

    resultsDiv.innerHTML = resultsHTML;
}

function showSuggestions() {
    // Get a diverse sample of mentors for suggestions
    const suggestions = completeMentors
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        .map(m => m['Name + Last Initial']);

    const suggestionsHTML = `
        <div class="suggestions">
            <h3>Try searching for:</h3>
            <div class="suggestion-list">
                ${suggestions.map(name => 
                    `<span class="suggestion-item" onclick="searchInput.value='${name}'; searchMentors('${name}')">${name}</span>`
                ).join('')}
            </div>
        </div>`;
    
    resultsDiv.innerHTML = suggestionsHTML;
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    searchMentors(e.target.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMentors(e.target.value);
    }
});

// Initialize with suggestions
showSuggestions();
