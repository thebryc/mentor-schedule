// Mentor data extracted from the PDF
const mentorData = [
    { name: "A'niya L", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person" },
    { name: "Abby M", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person" },
    { name: "Adrieanne M", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" },
    { name: "Alayna F", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Laya F", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Alex A", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Alex C", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person" },
    { name: "Alex T", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup" },
    { name: "Allie D", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person" },
    { name: "Alyssa N", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" },
    { name: "Amyia F", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Andrew P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Anthony K", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person" },
    { name: "Ashley B", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person" },
    { name: "Ashley C", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Ashly D", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Austin V", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Bailey V", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Breante M", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "TBD" },
    { name: "Camille L", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person" },
    { name: "Cheryl D", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person" },
    { name: "Chris M", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Chris M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role" },
    { name: "Christeon L", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Same Role" },
    { name: "Christian G", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" },
    { name: "Chyna F", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Cleve V", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "D'Andre T", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "D'Metrie K", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Danaila J", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Danielle N", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role" },
    { name: "Darius S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person" },
    { name: "Debra W", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Delores H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role" },
    { name: "Denisha C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Desiree R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" },
    { name: "Destiny C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Dr. Michelle D", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup" },
    { name: "Elise R", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Esther C", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Esther P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Eternity H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person" },
    { name: "Georgia A", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Same Role" },
    { name: "Grace M", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Halisha A", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "TBD" },
    { name: "Hannah A", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person" },
    { name: "Hillary F", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person" },
    { name: "Ivory G", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person" },
    { name: "Jacquari R", role: "UPM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "Recording will be sent" },
    { name: "Jada N", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role" },
    { name: "Jake C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "In-Person" },
    { name: "Jake C", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person" },
    { name: "Jake P", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role" },
    { name: "Jaleah R", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Jasmine S", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Jay S", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Recording will be sent" },
    { name: "Joel S", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup" },
    { name: "Josh U", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Same Role" },
    { name: "Josselyn G", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Julie O", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Kay B", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Kendrell W", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role" },
    { name: "Kenya C", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role" },
    { name: "Kenzie B", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Khadijah X", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Kiersten R", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Same Role" },
    { name: "Kim H", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Kimora H", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup" },
    { name: "KP P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Ladajah B", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Lai C", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Lee Ann L", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" },
    { name: "Letitia J", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Lyndsi F", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role" },
    { name: "Mary Julia K", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Matthew F", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role" },
    { name: "Melody O", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Molly G", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person" },
    { name: "Mondrai H", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role" },
    { name: "Naturi S", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Navy T", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Nikki D", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Nioz R", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person" },
    { name: "Nyria M", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Olivia F", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Pamela R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person" },
    { name: "Paris T", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Parker S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person" },
    { name: "Peyton D", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person" },
    { name: "Precious M", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Same Role" },
    { name: "Precious S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Recording will be sent" },
    { name: "Preston D", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Same Role" },
    { name: "Queen J", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role" },
    { name: "Reina Q", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Richard H", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Rineetha T", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup" },
    { name: "Rock T", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person" },
    { name: "Rodney J", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Sharonda R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Sierra C", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Stephen H", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person" },
    { name: "Stephen M", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role" },
    { name: "Tarralyn C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Tasha W", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Taylor F", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Taylor A", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role" },
    { name: "Tiffani F", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Tomeka P", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person" },
    { name: "Trinity R", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person" },
    { name: "Tristan G", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup" },
    { name: "Victoria R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person" },
    { name: "Viranda K", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup" },
    { name: "Zee H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role" },
    { name: "Zenora H", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person" },
    { name: "Zoe J", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup" },
    { name: "Zoe M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup" }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

// Role definitions for display
const roleDefinitions = {
    'LM': 'Learning Mentor',
    'SM': 'Senior Mentor',
    'UPM': 'Upperclassmen Learning Mentor',
    'RM': 'Research Mentor',
    'Tutor': 'Tutor'
};

function searchMentors(query) {
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }

    const matches = mentorData.filter(mentor => 
        mentor.name.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(matches, query);
}

function displayResults(results, query) {
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No mentors found matching "${query}"</p>
            </div>
            <div class="suggestions">
                <h3>Try searching for:</h3>
                <div class="suggestion-list">
                    <span class="suggestion-item" onclick="searchExample('Jay S')">Jay S</span>
                    <span class="suggestion-item" onclick="searchExample('Alex')">Alex</span>
                    <span class="suggestion-item" onclick="searchExample('Ashley')">Ashley</span>
                    <span class="suggestion-item" onclick="searchExample('Chris')">Chris</span>
                    <span class="suggestion-item" onclick="searchExample('Taylor')">Taylor</span>
                </div>
            </div>
        `;
        return;
    }

    const resultHTML = results.map((mentor, index) => `
        <div class="mentor-card" style="animation-delay: ${index * 0.1}s">
            <div class="mentor-name">${mentor.name}</div>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Role</div>
                    <div class="info-value">${roleDefinitions[mentor.role] || mentor.role}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Day</div>
                    <div class="info-value">${mentor.day}</div>
                </div>
                <div class="info-item full-width">
                    <div class="info-label">Campus</div>
                    <div class="info-value">${mentor.campus}</div>
                </div>
                <div class="info-item full-width">
                    <div class="info-label">Program Manager</div>
                    <div class="info-value">${mentor.pm}</div>
                </div>
                <div class="info-item full-width">
                    <div class="info-label">Training Choice</div>
                    <div class="info-value">${mentor.training}</div>
                </div>
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = resultHTML;
}

function searchExample(name) {
    searchInput.value = name;
    searchMentors(name);
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

// Focus on search input when page loads
window.addEventListener('load', () => {
    searchInput.focus();
});
