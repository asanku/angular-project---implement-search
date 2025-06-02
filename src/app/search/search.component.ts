import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  items = [
    {
      "filenumber": 239663,
      "firstName": "Manu",
      "middleName": "Ramachandran",
      "country": "India",
      "city": "Trivandrum",
      "dob": "1995-04-12",
      "Gender": "Male"
    },
    {
      "filenumber": 239664,
      "firstName": "Anjali",
      "middleName": "Nair",
      "country": "India",
      "city": "Kochi",
      "dob": "1998-06-24",
      "Gender": "Female"
    },
    {
      "filenumber": 239665,
      "firstName": "Arjun",
      "middleName": "Krishnan",
      "country": "India",
      "city": "Bangalore",
      "dob": "1992-12-30",
      "Gender": "Male"
    },
    {
      "filenumber": 239666,
      "firstName": "Priya",
      "middleName": "S",
      "country": "India",
      "city": "Chennai",
      "dob": "1990-05-15",
      "Gender": "Female"
    },
    {
      "filenumber": 239667,
      "firstName": "Rahul",
      "middleName": "Menon",
      "country": "India",
      "city": "Hyderabad",
      "dob": "1989-11-02",
      "Gender": "Male"
    },
    {
      "filenumber": 239668,
      "firstName": "Sneha",
      "middleName": "Raj",
      "country": "India",
      "city": "Pune",
      "dob": "1993-07-08",
      "Gender": "Female"
    },
    {
      "filenumber": 239669,
      "firstName": "Vishal",
      "middleName": "R",
      "country": "India",
      "city": "Delhi",
      "dob": "1988-03-18",
      "Gender": "Male"
    },
    {
      "filenumber": 239670,
      "firstName": "Lakshmi",
      "middleName": "Mohan",
      "country": "India",
      "city": "Mumbai",
      "dob": "1996-09-11",
      "Gender": "Female"
    },
    {
      "filenumber": 239671,
      "firstName": "Nikhil",
      "middleName": "Varma",
      "country": "India",
      "city": "Kolkata",
      "dob": "1991-04-25",
      "Gender": "Male"
    },
    {
      "filenumber": 239672,
      "firstName": "Divya",
      "middleName": "Ramesh",
      "country": "India",
      "city": "Ahmedabad",
      "dob": "1997-08-16",
      "Gender": "Female"
    },
    {
      "filenumber": 239673,
      "firstName": "Siddharth",
      "middleName": "Pillai",
      "country": "India",
      "city": "Lucknow",
      "dob": "1994-02-22",
      "Gender": "Male"
    },
    {
      "filenumber": 239674,
      "firstName": "Meera",
      "middleName": "Menon",
      "country": "India",
      "city": "Bhopal",
      "dob": "1995-06-29",
      "Gender": "Female"
    },
    {
      "filenumber": 239675,
      "firstName": "Karthik",
      "middleName": "Nair",
      "country": "India",
      "city": "Patna",
      "dob": "1990-12-03",
      "Gender": "Male"
    },
    {
      "filenumber": 239676,
      "firstName": "Aparna",
      "middleName": "S",
      "country": "India",
      "city": "Jaipur",
      "dob": "1992-10-14",
      "Gender": "Female"
    },
    {
      "filenumber": 239677,
      "firstName": "Gokul",
      "middleName": "Krishna",
      "country": "India",
      "city": "Vijayawada",
      "dob": "1993-01-19",
      "Gender": "Male"
    }
  ];
  

  searchId = ''; // input is a string, we'll parse it for comparison
  result: any = null;
  searchPerformed = false; // NEW FLAG to track search action

  search() {
    
    const fileNumberToSearch = Number(this.searchId.trim());
  
     // Mark that a search has been performed
  
    if (!this.searchId.trim() || isNaN(fileNumberToSearch)) {
      this.result = null;
      this.searchPerformed = false;
      return;
    }
     
    this.searchPerformed = true;
    this.result = this.items.find(item => item.filenumber === fileNumberToSearch) || null;
  
  }

}
