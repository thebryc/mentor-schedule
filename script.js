// Complete mentor data with all corrections from latest PDF
const mentorData = `Name,Role,Day,Campus,PM,Training
A'niya L,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Madeleine (madeleine@thebryc.org),In-Person
Abby M,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Madeleine (madeleine@thebryc.org),In-Person
Adrieanne M,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Virtual Makeup
AJ W,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Virtual Makeup
Alayna F,LM,Monday,Downtown (460 N 11th St),N/A - Tutor (angela@thebryc.org),
Alex A,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Alex C,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),In-Person
Alex T,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Allie D,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Alyssa N,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Virtual Makeup
Amyia F,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Same Role
Andrew P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Anthony K,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Ashley B,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org),Virtual Makeup
Ashley C,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Ashly D,UPM,Tuesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),In-Person
Austin V,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),
Bailey V,RM,Tuesday,Airline (14141 Airline Hwy Suite B),Mr. Kendrick (kendrick@thebryc.org),In-Person
Breante M,SM,Monday,,Ms. Rachel (rachel@thebryc.org),In-Person
Camille L,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org),Same Role
Cheryl D,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),Same Role
Chris M,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Chris M,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),Virtual Makeup
Christeon L,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Christian G,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Chyna F,LM,Thursday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Same Role
Cleve V,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
D'Andre T,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Same Role
D'Metrie K,LM,Wednesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Danaila J,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Same Role
Danielle N,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Same Role
Darius Spurlock,SSM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Virtual Makeup
Debra W,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),Virtual Makeup
Delores H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Virtual Makeup
Denisha C,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Desiree R,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Destiny C,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Dr. Michelle D,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Elise R,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Same Role
Esther C,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Virtual Makeup
Esther P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),
Eternity H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),In-Person
Georgia A,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Grace M,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Cannot attend - need to send recording
Halisha A,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Hannah A,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),In-Person
Jacquari R,UPM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org),Same Role
Jada N,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Jake C,UPM,Wednesday,Downtown (460 N 11th St),N/A - Tutor (angela@thebryc.org),Cannot attend - need to send recording
Jake P,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),Cannot attend - need to send recording
Jaleah R,RM,Thursday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Virtual Makeup
Jasmine S,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Jay P,UPM,Tuesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),In-Person
Jay S,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),In-Person
Jed K,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Same Role
Joel S,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Josh H,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),
Josh U,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Josselyn G,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Virtual Makeup
Julie O,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Same Role
Kay B,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Kendrell W,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),Same Role
Kenya C,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),Virtual Makeup
Kenzie B,LM,Monday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Khadijah X,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Virtual Makeup
Kiersten R,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Kim H,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Same Role
Kimora H,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),In-Person
KP P,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Ladajah B,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),Same Role
Lai C,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),In-Person
Lee Ann L,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Letitia J,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),In-Person
Lyndsi F,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),In-Person
Mary Julia K,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Matthew F,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Melody O,LM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Virtual Makeup
Molly G,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Mondrai H,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Naturi S,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Cannot attend - need to send recording
Navy T,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Nikki D,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Same Role
Nioz R,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),Virtual Makeup
Nyria M,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Olivia F,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Pamela R,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Paris T,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),In-Person
Parker S,SM,Monday,Downtown (460 N 11th St),Ms. Rachel (rachel@thebryc.org),In-Person
Peyton D,SM,Monday,Airline (14141 Airline Hwy Suite B),Ms. Jakia (jakia@thebryc.org),Virtual Makeup
Precious M,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Same Role
Precious S,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Virtual Makeup
Preston D,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Virtual Makeup
Queen J,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),In-Person
Reina Q,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),Same Role
Richard H,RM,Wednesday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),In-Person
Rineetha T,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),In-Person
Rock T,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),In-Person
Rodney J,SM,Thursday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Sharonda R,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),Virtual Makeup
Sierra C,RM,Tuesday,Airline (14141 Airline Hwy Suite B),Mr. Kendrick (kendrick@thebryc.org),Same Role
Stephen H,SM,Tuesday,Downtown (460 N 11th St),Ms. Mychell (mychell@thebryc.org),In-Person
Stephen M,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),Virtual Makeup
Tarralyn C,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Tasha W,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Taylor A,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),Virtual Makeup
Taylor F,SM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),
Tiffani F,UPM,Tuesday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),
Tomeka P,LM,Thursday,Downtown (460 N 11th St),Ms. Lauren (lauren@thebryc.org),
Trinity R,UPM,Wednesday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),
Tristan G,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),
Victoria R,LM,Tuesday,Airline (14141 Airline Hwy Suite B),Ms. Chasity (chasity@thebryc.org),
Viranda K,Tutor,TBD,N/A - Google Meets,N/A - Tutor (angela@thebryc.org),Virtual Makeup
Zee H,SM,Monday,Downtown (460 N 11th St),Ms. Cat (catherine@thebryc.org),
Zenora H,LM,Monday,Downtown (460 N 11th St),Mr. Kendrick (kendrick@thebryc.org),
Zoe J,UPM,Thursday,Downtown (460 N 11th St),Ms. Esmine (esmine@thebryc.org),
Zoe M,SM,Tuesday,Downtown (460 N 11th St),Ms. Jakia (jakia@thebryc.org),`;

const roleMapping = {
    'LM': 'Learning Mentor',
    'RM': 'Research Mentor', 
    'UPM': 'Upperclassmen Mentor',
    'SM': 'Senior Mentor',
    'SSM': 'Senior Staff Mentor',
    'Tutor': 'Tutor'
};

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
        
        if (entry['Name']) {
            data.push(entry);
        }
    }
    
    return data;
}

const mentors = parseCSV(mentorData);
const completeMentors = mentors.filter(mentor => 
    mentor['Name'] && mentor['Role'] && 
    (mentor['Day'] && mentor['Campus']) || mentor['Role'] === 'Tutor'
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
        const normalizedName = normalizeString(mentor['Name']);
        return normalizedName.includes(normalizedQuery);
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
        const fullRole = roleMapping[mentor['Role']] || mentor['Role'];
        const pm = mentor['PM'] || 'Not assigned';
        const training = mentor['Training'] || 'Not specified';
        
        return `
            <div class="mentor-card" style="animation-delay: ${index * 0.1}s">
                <div class="mentor-name">${mentor['Name']}</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Day</div>
                        <div class="info-value">${mentor['Day']}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Campus</div>
                        <div class="info-value">${mentor['Campus']}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Role</div>
                        <div class="info-value">${fullRole}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Training</div>
                        <div class="info-value">${training}</div>
                    </div>
                    <div class="info-item full-width">
                        <div class="info-label">Program Manager</div>
                        <div class="info-value">${pm}</div>
                    </div>
                </div>
            </div>`;
    }).join('');

    resultsDiv.innerHTML = resultsHTML;
}

function showSuggestions() {
    const suggestions = completeMentors
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        .map(m => m['Name']);

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

searchInput.addEventListener('input', (e) => {
    searchMentors(e.target.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchMentors(e.target.value);
    }
});

showSuggestions();
