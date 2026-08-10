// Mentor data — PY27 (generated from scheduling CSV)
const mentorData = [
    { name: "A'niya L.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Abbey (Abigail) M.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Abby M.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Abria S.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Adrieanne M.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Alayna (Laya) F.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Alex C.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Alexis K.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Allie P.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Alyssa N.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Amylah G.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tristan (tristan@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Amylah G.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Amyrie H.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Anaijha L.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Andrew P.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tristan (tristan@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Annslee B.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Anthony K.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Ashley C.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Ashley S.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Asia C.", role: "", campus: "", day: "", pm: "", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Austin V.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tristan (tristan@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Bailey V.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tristan (tristan@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Bridget R.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Bruce G.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Candace A.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Catherine M.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Cheryl D.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Cleve V.", role: "RM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Kendrick (kendrick@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Colin T.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Daisy M.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Dania B.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "LT PM", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Danielle N.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Debra W.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Dee (Davidra) K.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Denisha C.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Destiny C.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Dylan S.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "D\u2019Andre T.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Elisa B.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Emily T.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Esther P.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Faith T.", role: "UPM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Fran (Franzelia) S.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Gasten G.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "Virtual Training: Thursday, September 10 on Google Meets (link will be shared day-of)" },
    { name: "Halisha A.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Hannah A.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Ivory S.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Jacquari R.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "" },
    { name: "Jada N.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Jah\u2019Maria H.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Jalyn S.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Jared K.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Jayla W.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Jaylah H.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Kendrick (kendrick@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Jenn (Jennifer) L.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "" },
    { name: "Joel S.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Joline F.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Joshua U.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Julie O.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Kamryn G.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Kamryn J.", role: "LM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Kenny W.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Catherine (catherine@thebryc.org)", training: "" },
    { name: "Kenya C.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Ki (Kiana) W.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Kim (Kimora) H.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Kimora H.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "" },
    { name: "KP (Karrington) P.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Laura C.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Lauren G.", role: "UPM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Lee Ann L.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Letitia  J.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Lyssa (Alyssa) T.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Madison Hi.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Marla S.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Mathilda O.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Melody O.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "" },
    { name: "Meosha E.", role: "", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Michael M.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "MJ (Mary Julia) K.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "LT PM", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Molly G.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "" },
    { name: "Naomii H.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Nimotalahi O.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Nioz R.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Kendrick (kendrick@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Omega B.", role: "RM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Paris B.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "" },
    { name: "Parker S.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Kendrick (kendrick@thebryc.org)", training: "" },
    { name: "Peyton D.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Rachel (rachel@thebryc.org)", training: "" },
    { name: "Queen (Quinatora) J.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "" },
    { name: "Rasheda M.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Rayne J.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Reagan M.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tristan (tristan@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Reese A.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "LT PM", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Reina Q.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Kendrick (kendrick@thebryc.org)", training: "" },
    { name: "Rodrick J.", role: "", campus: "", day: "", pm: "", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Roshaunda J.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Ryeasha P.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Tim (tim@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Scotland  A.", role: "SM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Wednesday", pm: "Catherine (catherine@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Stephen C.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "" },
    { name: "Tabatha H.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "Virtual Training: Thursday, September 10 on Google Meets (link will be shared day-of)" },
    { name: "Tae (D\u2019Shantae) E.", role: "", campus: "", day: "", pm: "", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Tamia D.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "LT PM", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Tasha (Natasha) W.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "" },
    { name: "Taylor M.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Tuesday", pm: "Catherine (catherine@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Tichelle P.", role: "LM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Tiffani F.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Tomeka P.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Tristan (tristan@thebryc.org)", training: "Virtual Training: Thursday, September 10 on Google Meets (link will be shared day-of)" },
    { name: "Tori H.", role: "RM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Kendrick (kendrick@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Trevor M.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Trinity R.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "" },
    { name: "Tristan S.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Lauren (lauren@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Tyla W.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Aareena (aareena@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Tyler B.", role: "LM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Lauren (lauren@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Tyrus G.", role: "LM", campus: "Downtown (460 N 11th St)", day: "Thursday", pm: "Catherine (catherine@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },
    { name: "Victoria W.", role: "Tutor", campus: "Virtual Tutor", day: "Tutor", pm: "N/A (Virtual Tutor)", training: "Virtual Training: Thursday, September 3 on Google Meets (link will be shared day-of)" },
    { name: "Wendy S.", role: "UPM", campus: "Airline (14141 Airline Hwy, Suite B)", day: "Tuesday", pm: "Aareena (aareena@thebryc.org)", training: "Virtual Training: Thursday, September 10 on Google Meets (link will be shared day-of)" },
    { name: "Yusra B.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "" },
    { name: "Zoe A.", role: "UPM", campus: "Downtown (460 N 11th St)", day: "Wednesday", pm: "Lauren (lauren@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Zoe A.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Rachel (rachel@thebryc.org)", training: "No training required \u2014 you're returning to the same role as last year." },
    { name: "Zoe J.", role: "SM", campus: "Downtown (460 N 11th St)", day: "Monday", pm: "Tim (tim@thebryc.org)", training: "In-Person: Thursday, August 27th at BRYC Airline (14141 Airline Hwy, Suite B)" },];

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

// Only render a field if it actually has a value
function infoItem(label, value, fullWidth) {
    if (!value || !value.trim()) return '';
    const cls = fullWidth ? 'info-item full-width' : 'info-item';
    return `
                <div class="${cls}">
                    <div class="info-label">${label}</div>
                    <div class="info-value">${value}</div>
                </div>`;
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
                    <span class="suggestion-item" onclick="searchExample('Madison')">Madison</span>
                    <span class="suggestion-item" onclick="searchExample('Zoe')">Zoe</span>
                    <span class="suggestion-item" onclick="searchExample('Abby')">Abby</span>
                    <span class="suggestion-item" onclick="searchExample('Cleve')">Cleve</span>
                </div>
                <p style="margin-top:15px;color:#667eea;">Tip: try your preferred name, and search just your first name if your last initial doesn't match.</p>
            </div>
        `;
        return;
    }

    const resultHTML = results.map((mentor, index) => `
        <div class="mentor-card" style="animation-delay: ${index * 0.1}s">
            <div class="mentor-name">${mentor.name}</div>
            <div class="info-grid">
                ${infoItem('Role', roleDefinitions[mentor.role] || mentor.role, false)}
                ${infoItem('Day', mentor.day, false)}
                ${infoItem('Campus', mentor.campus, true)}
                ${infoItem('Program Manager', mentor.pm, true)}
                ${infoItem('Training', mentor.training, true)}
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
searchInput.addEventListener('input', (e) => searchMentors(e.target.value));
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMentors(e.target.value);
});

// Focus on search input when page loads
window.addEventListener('load', () => searchInput.focus());
