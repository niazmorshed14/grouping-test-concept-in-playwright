import {test, expect} from "@playwright/test";

//implementation of hooks at first for better understanding
test.beforeAll(async()=>{
    console.log("This is beforeAll hook...")
});

test.afterAll(async()=>{
    console.log("This is afterAll hook...")
});

test.beforeEach(async()=>{
    console.log("This is beforeEach hook...")
});

test.afterEach(async()=>{
    console.log("This is afterEach hook...")
});

//describe block contains group of tests
//describle block 1
test.describe("Group 1", async()=>{

    test ("Test 1", async({page})=>{
        console.log("This is test 1....");

    });
 
    test ("Test 2", async({page})=>{
        console.log("This is test 2....");

    });
});

//describe block 2
test.describe.only("Group 2", async()=>{

    test ("Test 3", async({page})=>{
        console.log("This is test 3....");

    });

    test ("Test 4", async({page})=>{
        console.log("This is test 4....");

    });

});