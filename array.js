function show()
{
    document.getElementsByClassName('map1')[0].style.display="none";
    document.getElementsByClassName('slotselector')[0].style.display="block";
   
}






var arrayofdoctors=[
    {
    "doctorListing": [
    {
    "docName": "Dr Shashank",
    "doctorID": 100,
    "specialization": "Dental",
    "qualification": "BDS",
    "rating": 4,
    "experience": 7,
    "cost": 500,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Khetrapal Nursing Home",
    "addressLineTwo": "sector 28,gurugram",
    "city": "New Delhi",
    "state": "Delhi",
    "gpsCoordinates": {
    "gpsLatitude": 28.7,
    "gpsLongitude": 77.8
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr Shashi gupta",
    "doctorID": 101,
    "specialization": "surgeon",
    "qualification": "MBBS",
    "rating": 4,
    "experience": 9,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "Hope Nursing Home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5149,
    "gpsLongitude": 77.0741
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr raju kalra",
    "doctorID": 102,
    "specialization": "orthopedics",
    "qualification": "MS(ortho)",
    "rating": 4,
    "experience": 19,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "handa nursing home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr Ak handa",
    "doctorID": 103,
    "specialization": "orthopedics",
    "qualification": "MS(ortho)",
    "rating": 4,
    "experience": 14,
    "cost": 500,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "handa nursing home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr katoch v",
    "doctorID": 104,
    "specialization": "pediatrics",
    "qualification": "MS",
    "rating": 4,
    "experience": 5,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "handa nursing home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr lokesh handa",
    "doctorID": 105,
    "specialization": "plastic surgery",
    "qualification": "MCH",
    "rating": 4,
    "experience": 11,
    "cost": 600,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Handa nursing home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Suman jogi",
    "doctorID": 106,
    "specialization": "gynecology",
    "qualification": "MBBS",
    "rating": 4,
    "experience": 13,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "Handa nursing home",
    "addressLineTwo": "near sector 21,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Shikha garg",
    "doctorID": 107,
    "specialization": "Dental",
    "qualification": "BDS",
    "rating": 4,
    "experience": 4,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "shikha dental care",
    "addressLineTwo": "B-1/10, Shop No: 7, gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5954,
    "gpsLongitude": 77.0891
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr karuna malhotra",
    "doctorID": 108,
    "specialization": "homopaethy",
    "qualification": "BHMS",
    "rating": 4,
    "experience": 5,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "",
    "addressLineTwo": "B - 25/1, Ground Floor,gurugram",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5654,
    "gpsLongitude": 77.0641
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr madan",
    "doctorID": 109,
    "specialization": "orthopedics",
    "qualification": "MS(ortho)",
    "rating": 4,
    "experience": 19,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "arogya clinic",
    "addressLineTwo": "Shop # 2, R.K Plaza Center, Sector-55, nullGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5254,
    "gpsLongitude": 77.0891
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr Bhajan yadav",
    "doctorID": 110,
    "specialization": "ayurveda",
    "qualification": "BHMS",
    "rating": 4,
    "experience": 21,
    "cost": 300,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "shubham clinic",
    "addressLineTwo": "Rao Maduram Complex, Gurgaon RoadGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5554,
    "gpsLongitude": 77.0441
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr sanjeev mittal",
    "doctorID": 111,
    "specialization": "Ent",
    "qualification": "DNB",
    "rating": 4,
    "experience": 7,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Lakshay Ent Care Centre",
    "addressLineTwo": "Shop No 107, Near Sadar BazarGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.4454,
    "gpsLongitude": 77.8841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr VB sinha",
    "doctorID": 112,
    "specialization": "Homoepathy",
    "qualification": "BHMS",
    "rating": 4,
    "experience": 8,
    "cost": 500,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Pearl Dental Clinic & Implant Centre",
    "addressLineTwo": "107 L/A, New Colony, nullGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5054,
    "gpsLongitude": 77.0541
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Sunil saini",
    "doctorID": 113,
    "specialization": "orthopedics",
    "qualification": "MS(ortho)",
    "rating": 4,
    "experience": 19,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Triveni Hospital - Subhash Nagar",
    "addressLineTwo": "No 207/13, Dhobi GhatGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.4654,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Geeta rastogi",
    "doctorID": 114,
    "specialization": "orthopedics",
    "qualification": "MS(ortho)",
    "rating": 4,
    "experience": 19,
    "cost": 800,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "Triveni Hospital - Subhash Nagar",
    "addressLineTwo": "No 207/13, Dhobi GhatGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Poonam Jhemb",
    "doctorID": 115,
    "specialization": "gynelogy",
    "qualification": "MS(gyn)",
    "rating": 4,
    "experience": 12,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "Triveni Hospital - Subhash Nagar",
    "addressLineTwo": "No 207/13, Dhobi GhatGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Anurag Singh",
    "doctorID": 116,
    "specialization": "pediatrics",
    "qualification": "MS",
    "rating": 4,
    "experience": 22,
    "cost": 400,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Triveni Hospital - Subhash Nagar",
    "addressLineTwo": "No 207/13, Dhobi GhatGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5454,
    "gpsLongitude": 77.0841
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr Vijay singh",
    "doctorID": 117,
    "specialization": "dental",
    "qualification": "BDS",
    "rating": 4,
    "experience": 8,
    "cost": 800,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "Model Dental Care",
    "addressLineTwo": "101, nullGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.4154,
    "gpsLongitude": 77.0341
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },{
    "doctorListing": [
    {
    "docName": "Dr Shushma yadav",
    "doctorID": 118,
    "specialization": "dental",
    "qualification": "BDS",
    "rating": 4,
    "experience": 8,
    "cost": 400,
    "gender": "female",
    "address": [
    {
    "addressLineOne": "Dr.Smile Dental Clinic",
    "addressLineTwo": "Old Railway Road, nullGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.4954,
    "gpsLongitude": 77.0261
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   {
    "doctorListing": [
    {
    "docName": "Dr Suresh kumar garg",
    "doctorID": 119,
    "specialization": "Dental",
    "qualification": "BDS",
    "rating": 4,
    "experience": 5,
    "cost": 500,
    "gender": "male",
    "address": [
    {
    "addressLineOne": "garg dental care",
    "addressLineTwo": " 2268, Behind Huda Market, nullGurgaon, Haryana",
    "city": "gurugram",
    "state": "haryana",
    "gpsCoordinates": {
    "gpsLatitude": 28.5654,
    "gpsLongitude": 77.0741
    }
    }
    ],
    "slots": {
    "slotInterval": 15,
    "morning": [
    {
    "startTime": "08:00",
    "endTime": "10:00"
    }
    ],
    "afternoon": [
    {
    "startTime": "10:00",
    "endTime": "15:00"
    }
    ],
    "evening": [
    {
    "startTime": "15:00",
    "endTime": "18:00"
    }
    ],
    "night": [
    {
    "startTime": "18:00",
    "endTime": "22:00"
    }
    ]
    }
    }
    ]
   },
   ];
var b=JSON.stringify(arrayofdoctors);
localStorage.setItem("key",b);
var c=localStorage.getItem("key",b);
var d=JSON.parse(c);


for(let i=0;i<d.length;i++)
{
    document.getElementsByClassName('head')[i].innerHTML=d[i].doctorListing[0].docName;
    document.getElementsByClassName('cli')[i].innerHTML=d[i].doctorListing[0].address[0].addressLineOne;
    document.getElementsByClassName('desc1')[i].innerHTML=d[i].doctorListing[0].qualification;
    document.getElementsByClassName('desc')[i].innerHTML=d[i].doctorListing[0].specialization;
    document.getElementsByTagName('h6')[i].innerHTML=d[i].doctorListing[0].cost;
    document.getElementsByClassName('h3')

    if(d[i].doctorListing[0].gender=="male")
    {
      document.getElementsByClassName("img-fluid")[i].src="https://zoylo-images.s3-ap-southeast-1.amazonaws.com/files/052b97b5-811f-46aa-8f99-175d3e4a437d-Doctors-Male.jpg";
    }
    else{
        document.getElementsByClassName("img-fluid")[i].src="https://zoylo-images.s3-ap-southeast-1.amazonaws.com/files/31b7fda6-4955-4d2b-aebf-18ec17d30c04-Doctors-Female.jpg";
    }
}


function initMap()
  {
      var location ={lat: 28.459497 ,lng: 77.026634};
      var map =new google.maps.Map(document.getElementById("map"),{
          zoom: 11,
          center: location
      });
 for(let i=0;i<d.length;i++)
 {    
 addMarker({lat: d[i].doctorListing[0].address[0].gpsCoordinates.gpsLatitude ,lng: d[i].doctorListing[0].address[0].gpsCoordinates.gpsLongitude});
 
 
  function addMarker(coordinates)
    {
    var marker=new google.maps.Marker({
          position: coordinates,
          map: map
      }) ;
      var e=d[i].doctorListing[0].address[0].addressLineOne;
      var infoWindow=new google.maps.InfoWindow({
          content:e
      });
      marker.addListener('click',function()
      {
          infoWindow.open(map,marker);
      })
 }
}
}

