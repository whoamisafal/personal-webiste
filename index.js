const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static(path.join(__dirname , 'static')));
app.use(express.static(path.join(__dirname,'assets')));
app.set('views', './public/views');
app.set('view engine', 'pug');





app.get('/', (req, res) => {
    items =[
        {
            title: 'Item 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
        },
        {
            title: 'Item 2',
            description:"This is second description"
        },
        {
            title: 'Item 3',
            description:"This is third description"
        },{
            title: 'Item 4',
            description:"This is fourth description"
        },
        {
            title: 'Item 5',
            description:"This is fifth description"
        }
    ]
    currentProjects=[
        {
            title: 'OOP with C++',
            description: 'OOP with C++ is an android app which is designed for the student who want to learn C++ programming language.In this app, basic to advanced concept is available.',
            link: 'https://play.google.com/store/apps/details?id=com.learn.oop_with_cpp',
            image: 'https://play-lh.googleusercontent.com/UjcMF9IcVDAfEaK6LZNgWXj9VNZffvaMBsEaTVJIEgtDHZudkmiHDvhhJkKNUdHqCyA=s180-rw'
        },
        {
            title: 'The Power of Compounding',
            description: `The Power of Compounding is an android app special to design to understand the compound interest.
            The power of compounding in a finance.
            Features:
            EMI Calculator
            Compound Interest Calculation (Annually, Semi, Quarterly, Monthly)
            Simple Interest Calculation`,
            link: 'https://play.google.com/store/apps/details?id=com.apptechnp.powerofcompounding',
            image: 'https://play-lh.googleusercontent.com/hEnK_NjxAg5W16TmH67po2ulLqLtTRGi0eCH_FV7hvRsw1d3lN0WRLXDeenFKZscPMw=s180-rw'
        },
        {
            title: 'Backup Contact and Scanner',
            description: `Backup Contact is an android app. Easy Contact Save, Image/QR code Scanner.
            One Click to Share and Save Contact.
            Easy Contact Saver, Barcode, QRcode Scanner.
            Create your Contact in QRcode and Share.
            Make your life easy.
            Backup Contact is a contact backup app which backup your contact in txt and excel format.
            You can easily backup your all contact and import contact whenever needed.
            You can easily share your contact.
            Features:
            - QR code / Bar Code Scanner
            - Image QR code /Bar Code Scanner
            - Backup Contacts
            - Import Contacts
            - Share contacts in QR code
            - Direct call`,
            link: 'https://play.google.com/store/apps/details?id=com.apptechnp.backupcontact',
            image: 'https://play-lh.googleusercontent.com/Lpyrfvksnj_bE63c7Iq2RN7h-21ZWWThT493OeGMM_rmCMi-Tm6LTJIw3kWeitHjZQ=s180-rw'
        },
        {
            title: 'Science *Kids',
            description: `All about Science app is design for students and other.
            All about Science about animals, plants, planets, fruits and chemistry elements.
            This app is generally for student and teacher.
            Flowers
            - flower image
            - flower scientific name
            - short description about flower
            
            
            Mammals
            - mammals image
            - mammals scientific name
            - short description about each mammals
            
            Aves
            - Aves image
            - Aves scientific name
            - short description about each aves
            
            --- can share image with friends in social media
            
            Medicinal plants
            - Medicinal plants image
            - Medicinal plants scientific name
            - short description about each Medicinal plants
            Fruits
            - Fruits image
            - Fruits scientific name
            - short description about each Fruits
            
            About planets of the solar system
            
            40 Chemistry elements
            Learn General Knowledge (GK)
            
            
            Happy Learning
            Love our app`,
            link: 'https://play.google.com/store/apps/details?id=com.deeplearning.learn_with_us',
            image: 'https://play-lh.googleusercontent.com/EJhEqu-x038T1vnefsBgTsnsnN7XvrxKVZz7ZVN5I5_n0trTuWn13ryDiR96xMabBQM=s180-rw'
        },
        {
            title: 'Learning App Nepal',
            description: `Learning App Nepal is used for the student and lectures.It is an android app for the engineering student such as civil, electrical, electronics, computer and other. Bachelor and Diploma Level.
            Form Learning app Nepal you can easily share PDF file in other platform.
            
            What are the app features?
            - Can upload notes and view notes
            - Can download notes
            -Discussion or Explore
            - Can upload old questions
            - Syllabus
            - CTEVT Result notice
            
            Syllabus, Notes, and Old Questions of Engineering of CTEVT, Tribhuvan University, Pokhara University, Purbanchal University, Kathmandu University, And Far Western University.
            
            Learning app Nepal objectives:
            - Share notes and old question
            - Collect notes and old question
            - Discussion with friends for any problem
            - Easy to interact
            A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.`,
            link: 'https://play.google.com/store/apps/details?id=com.appnepal.learning_app_nepal',
            image: 'https://play-lh.googleusercontent.com/RaqmLjMsgGb5WGy5R3i687ogGjfxrrxDb281zeL0SexNcviWw1oy_zXAXjKO6fRrMMAx=s180-rw'
        }
    ]


    res.render('index',{
        title: 'Home',
        description:'Personal Webiste, Portfolio, Blog, About Me, Safal Shrestha',
        header: false,
        currentProjects: currentProjects,

    });
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


