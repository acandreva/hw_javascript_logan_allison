//I did it the long way because I don't know enough about JavaScript and this helped me not get confused.
var obama = {
    firstName: "Barack ",
    lastName: "Obama",
    termLength: "8",
    party: "Democrat",
    yearsOfPresidency: "2009-present",
}

var bush = {
    firstName: "George W. ",
    lastName: "Bush",
    termLength: "8",
    party: "Republican",
    yearsOfPresidency: "2001-2009",
}

var clinton = {
    firstName: "Bill ",
    lastName: "Clinton",
    termLength: "8",
    party: "Democrat",
    yearsOfPresidency: "1993-2001",
}

var bushsr = {
    firstName: "George H.W. ",
    lastName: "Bush",
    termLength: "4",
    party: "Republican",
    yearsOfPresidency: "1989-1993",
}

var reagan = {
    firstName: "Ronald ",
    lastName: "Reagan",
    termLength: "8",
    party: "Republican",
    yearsOfPresidency: "1981-1989",
}

var presidents = [obama, bush, clinton, bushsr, reagan]

console.log(presidents[2].firstName+presidents[2].lastName);