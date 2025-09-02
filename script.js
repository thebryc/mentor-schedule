// Mentor data extracted from the PDF
const mentorData = [
    { name: "A'niya L", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Aaliyah W", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Abby M", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Abria S", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Adrieanne M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Alayna F", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Alex A", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Alex C", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Alex T", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Allie D", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Alyssa N", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Alyssa W", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Amelia R", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Amyia F", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Andrew P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Angel C", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Anthony K", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ashantis B", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ashley B", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ashley C", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Ashly D", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Austin V", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ayanah F", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ayanah F", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Bailey V", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Bella C", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Bella T", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Blake L", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Briauna W", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Breante M", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "TBD" },
    { name: "Kaleb H", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Camille L", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Cara K", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Recording will be sent" },
    { name: "Carolina Q", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Catherine R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Chakira K", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Chakira K", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Cheryl D", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Chris M", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Chris M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Christeon L", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Christi B", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Christian G", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Chyna F", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Cleve V", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "D'Andre T", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "D'Metrie K", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "De'Ajah M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Danaila J", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Danielle N", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Darian G", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Darius S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Debra W", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Delores H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Denisha C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Desiree R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Destiny C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Diya S", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Elise R", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Emily S", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Emily T", role: "UPM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Esther C", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Esther P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Eternity H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Georgia A", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Grace M", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Halisha A", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "TBD" },
    { name: "Hannah A", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Harper T", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Hillary F", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Hunter G", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ivory G", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Jacquari R", role: "UPM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "Recording will be sent" },
    { name: "Jada N", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Jake C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "In-Person (August 28)" },
    { name: "Jake C", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Jake P", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Jaleah R", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Jared K", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Jashana B", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Jasmine S", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Jay S", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Recording will be sent" },
    { name: "Jomiah J", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Joel S", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Jonathan M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Jordan R", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Josh U", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Same Role (Training Optional)" },
    { name: "Josselyn G", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Julie O", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Kaleigh R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ka'Trina A", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Ka'Trina A", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Kay B", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Kendrell W", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Kenya C", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Kenzie B", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Khadijah X", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Khalynn R", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Khalynn R", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Kiersten R", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Same Role (Training Optional)" },
    { name: "Kim H", role: "N/A - Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Kimora H", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "KP P", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Kristina C", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Ladajah B", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Lai C", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Laya F", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Lee Ann L", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Letitia J", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Lisa T", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Lyndsi F", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Maddie K", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Madison H", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Makyla C", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Makyla C", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Mary Julia K", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Martin A", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Mason H", role: "UPM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Matthew F", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Melody O", role: "LM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Michael H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Michelle D", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Molly G", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Mondrai H", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Morgan D", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Natalie A", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Natalie B", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Natalie B", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Naturi S", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Navy T", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Nikki D", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Nioz R", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Niya M", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Nyria M", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Olivia F", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Omele S", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Pamela R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Paris B", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Paris T", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Parker S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Peyton D", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Precious M", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Precious S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Recording will be sent" },
    { name: "Preston D", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Queen J", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Rachel T", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Rannya R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Reese R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Reina Q", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Richard H", role: "UPM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Riley M", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Rachel (rachel@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Rineetha T", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Rock T", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Rodney J", role: "SM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Sereniti H", role: "SM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Sharonda R", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Shaunna T", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Sierra C", role: "RM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Sierra T", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Madeleine (madeleine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Stephen H", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Mychell (mychell@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Swesha B", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Talicia G", role: "UPM", day: "Monday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Tarralyn C", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Tasha W", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Taylor F", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Taylor A", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Thomas K", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Tiffani F", role: "UPM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Tomeka P", role: "LM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Treasure S", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Trinity R", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Lauren (lauren@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Tristan G", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Tyverli D", role: "RM", day: "Wednesday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Victoria R", role: "LM", day: "Tuesday", campus: "Airline (14141 Airline Hwy, Suite B)", pm: "Ms. Chasity (chasity@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Viranda K", role: "Tutor", day: "N/A - Tutor", campus: "N/A - Tutor", pm: "N/A - Tutor", training: "Virtual Makeup (September 4)" },
    { name: "Warren E", role: "RM", day: "Wednesday", campus: "Downtown (460 n 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Zee H", role: "SM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Ms. Cat (catherine@thebryc.org)", training: "Same Role (Training Optional)" },
    { name: "Zenora H", role: "LM", day: "Monday", campus: "Downtown (460 N 11th St)", pm: "Mr. Kendrick (kendrick@thebryc.org)", training: "In-Person (August 28)" },
    { name: "Zoe J", role: "UPM", day: "Thursday", campus: "Downtown (460 N 11th St)", pm: "Ms. Esmine (esmine@thebryc.org)", training: "Virtual Makeup (September 4)" },
    { name: "Zoe M", role: "SM", day: "Tuesday", campus: "Downtown (460 N 11th St)", pm: "Ms. Jakia (jakia@thebryc.org)", training: "Virtual Makeup (September 4)" }
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
