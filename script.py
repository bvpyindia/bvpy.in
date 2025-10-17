# Let's read and analyze the content of the BVPY images to understand what information needs to be included in the website
import json

# Based on the images shown, I'll compile the information about BVPY scholarship program
bvpy_data = {
    "program_name": "भारतीय वैज्ञानिक प्रोत्साहन योजना (Bhartiya Vaigyanik Protsahan Yojana)",
    "acronym": "BVPY",
    "scholarship_type": "100% Scholarship Exam",
    
    "application_process": {
        "step1": "Fill the Application Form",
        "methods": [
            "Available online on official website (www.bvpy.in)",
            "At regional authorised office",
            "Application forms are circulated in schools by authorities"
        ]
    },
    
    "contact_info": {
        "website": "www.bvpy.in",
        "social_media": "@bvpy.in",
        "head_office": {
            "address": "413 A, 2nd Floor, Sec-68, HSIIDC, IMT, Faridabad 121004"
        },
        "regional_office": {
            "address": "Jatpura Gate, Ramala Talav Road, Chandrapur, Maharashtra - 442401"
        }
    },
    
    "after_school_choices": {
        "grades": "11th + 12th",
        "streams": {
            "science_research_technology": [
                "General Science",
                "Computer Science", 
                "Information Technology",
                "Electronics",
                "Home Science",
                "Other Vocational (etc)"
            ],
            "commerce_management": [
                "Accountancy",
                "Business Management",
                "Hotel Management",
                "Law (Advocate)"
            ],
            "arts_hospitality": [
                "Sociology",
                "Political Science",
                "History and Civil",
                "Media & Communication"
            ]
        }
    },
    
    "maharashtra_boards": {
        "streams": [
            "General Science",
            "Computer Science",
            "Information Technology", 
            "Electronics",
            "Home Science"
        ],
        "competitive_exams": [
            "IIT-JEE", "NEET", "JIPMER", "IISER", "NISER", 
            "MH-CET", "NDA", "AIIMS", "ISRO", "DRDO"
        ],
        "note": "Eligible for Competitive Exams comes only with a science background"
    },
    
    "scholarship_benefits": {
        "type": "Free Education | Upto 90% Scholarship",
        "eligibility": [
            "Qualified in BVPY - Scholarship Exam 2026",
            "Family Income not more than ₹1 Lac"
        ],
        "procedure": [
            "Step 1: Fill Application Form",
            "Step 2: Give BVPY - Scholarship Exam 2026", 
            "Step 3: Interview and Documents Verification"
        ],
        "grades_covered": "8th | 9th | 10th",
        "benefits_list": [
            "Classroom Tuitions",
            "Foundation Prepare",
            "Digital Data",
            "Memory Lab",
            "Vedic Maths",
            "Competitive Studies (IIT-JEE / NEET / NDA / CET)"
        ],
        "target": "Financial support after School for underprivileged and meritorious students"
    },
    
    "free_education_benefits": {
        "equal_opportunity": "Removes financial barriers so that poor and underprivileged children can study alongside others",
        "economic_growth": "Free education builds a skilled workforce, which drives national development",
        "reduces_poverty": "Education equips children with skills and knowledge, helping them secure better jobs and break the cycle of poverty"
    },
    
    "exam_details": {
        "questions": "50 Questions for 100 Marks",
        "nature": "All questions are compulsory",
        "duration": "1 Hour (60 Minutes)",
        "device_requirements": "Online Exam should be given on internet accessible device (Mobile Phone / Laptop / Computer / Tablet - PC)",
        "attempts": "Only One attempt will be calculated for results",
        "modes": ["Online Mode", "Offline Mode"],
        "conducted_by": "Head Office"
    },
    
    "interview_process": {
        "step": "Step 3: Selected candidates have to visit for Interview",
        "selection_criteria": "Candidates are selected after BVPY-100% Scholarship Exam",
        "location": "Visit nearest authorised centre for interview",
        "documents_required": [
            "Students Aadhar Card (Xerox)",
            "Parents or Guardians Aadhar Card (Xerox)",
            "Father or Guardian Pan Card (Xerox)",
            "Caste Certificate or Income Certificate (Xerox)",
            "10th Marksheet (If available)"
        ],
        "notes": [
            "Documents Verification will take 3 days",
            "Qualified candidates will get ID number"
        ]
    },
    
    "career_guidance": {
        "science_streams": {
            "PCM": "Tech, Engineering, Defence, etc.",
            "PCB": "Medical, Pharmacy, Life Sciences, etc.",
            "PCMB": "Both options open"
        },
        "competitive_exams": "IIT-JEE | NEET | MH-CET",
        "note": "There are many more competitive exams which are eligible for students who take science after 10th. All guidance and preparation are done by Young Education Society (Trust)"
    }
}

print("BVPY Program Data Compiled Successfully!")
print(f"Program: {bvpy_data['program_name']}")
print(f"Website: {bvpy_data['contact_info']['website']}")
print(f"Number of benefit categories: {len(bvpy_data['scholarship_benefits']['benefits_list'])}")