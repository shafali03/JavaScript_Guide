const companies = [
  { name: 'Company One', category: "finance", start: 1980, end: 2009},
  { name: 'Company Two', category: "Retail", start: 1999, end: 2010},
  { name: 'Company Three', category: "Tech", start: 1970, end: 2012},
  { name: 'Company Four', category: "Bank", start: 1945, end: 2019},
  { name: 'Company Five', category: "Auto", start: 1976, end: 2019},
  { name: 'Company Six', category: "Tech", start: 1988, end: 2006}  
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 64, 32];


// for loop
for(let i = 0; i < companies; i++) {
  console.log(companies[i])
}


// forEach

companies.forEach(function(company) {
  console.log(company.name);
});



// for loop

let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink)




// filter
const canDrink = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
})

// one line
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);




// Filter retail companies

const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});

// one line code

const retailCompany = companies.filter((company) => company.category === 'Retails')

console.log(retailCompanies);




// Get 80s companies

const eightiesCompanies = companies.filter((company) => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies)




// filter  get companies lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

console.log(lastTenYears);






// map

//Create array of company names
const companyNames = companies.map(function(company) {
  return company.name
});

console.log(companyNames);


// company name with start to end date
const testMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
})

console.log(testMap);



// company name with start to end date one line

const testMap = companies.map((company) =>  `${company.name} [${company.start} - ${company.end}]`);




// All Numbers square
const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)




const ageMap = ages
  .map(age => Math.sqrt(age)) // first square al the number
  .map(age => age * 2); // then multiply it by 2 

  console.log(ageMap)






// sorted by start year
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1
  } else {
    return -1;
  }
})

// one  line code
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);



// sort ages 
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges)




// reduce sum total

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);