//This class exists to populate the analytics bound digitalData object.
//The digitalData object is defined below and populated with functions 
//that capture information from the page.
var digitalData = digitalData || {};

digitalData = {
    page: {
        pageInfo: {
            pageName: "",
            referringURL: "",
            language: "",
            OSType: "",
            platform: "",
            onsiteSearchTerm: "",
            onsiteSearchResult: ""
        },
        category: {
            department: "",
            category: "",
            subCategory1: "",
            subCategory2: "",
            subCategory3: "",
            subCategory4: ""
        },
        pageTaxonomy: {
            audience: "",
            contentType: "",
            product: "",
            clouderaComponent: "",
            resourceType: "",
            context: ""
        }
    },
    events: [],
    components: [],
    search: {
        facetedFilter: "",
        searchResultNumber: "",
        searchTerm: "",
        searchSuggestion: "",
        searchResult: ""
    },
    errorInfo: [{
        errorMessage: "",
        loginErrorCause: ""
    }],
    user: {
        loginStatus: "",
        currentState: "",
        visitorType: "",
        optInCheckBoxUser: "",
        ip:"",
        host:"",
        infoHandler: {
            accountID: "",
            contactID: "",
            userID: "",
            company: "",
            title: "",
            jobFunction: "",
            jobRole: "",
            portalRoles: "",
            relayState: ""
        }
    },
    demandBase: {
        audience: "",
        industry: "",
        subIndustry: "",
        city: "",
        county: "",
        state: "",
        zip: "",
        countryName: "",
        demandBaseID: "",
        manualReview: "",
        revenueRange: "",
        employeeCount: "",
        annualSales: "",
        fortune1000: "",
        fortune2000: ""
    },
    eloqua: {
        formName: "",
        customerGUID: "",
        redirectLocation: "",
        elqSiteID: "",
        assetCategory: "",
        leadSource: "",
        campaignID: "",
        leadSourceDetail: "",
        leadSourceRecent: "",
        hsrc: "",
        dlTerms: ""
    }
};

//Parses JCR path based on business rules
//returns an array of tokens that represents the path
//for purposed of analytics.
//The JCR path is transformed into the array
//because the tokens won't have "content"
//may have "homepage" etc....
function getJCRPathTokens(jcrPath) {

    //Remove /content root of path.
    jcrPath = jcrPath.replace(/^\/content\//g,"");
    //Remove /dam root of path for resources
    //loaded in dynamic forms.
    jcrPath = jcrPath.replace(/^dam\//g,"");
    //Remove html extensions
    jcrPath = jcrPath.replace(/\.html/g,"");
    //Remove landing extensions for dynamic resources
    jcrPath = jcrPath.replace(/\.landing/g,""); 
    //Remove training slash
    jcrPath = jcrPath.replace(/\/$/,"");

    var pathTokens = jcrPath.split("/");


    //Check whether we have any tokens 
    //Should always have at least www/lang-country
    //where www is the platform
    if (pathTokens.length >= 2){
        //Artificial homepage token b/c of AEM quirk
        if (pathTokens.length == 2){
            pathTokens.push('homepage');
        }
    }

    return pathTokens;
}

function setDigitalDataPageName(pathTokens) {

   //Set pagename
    digitalData.page.pageInfo.pageName = pathTokens.join(":");
}

function setDigitalDataCategories(pathTokens) {
        //Always have a department
        //x starts at 2 because we are omitting platform/lang-country
        //(e.g. www/en-us)
        //for dept. cat. mappings.
        var x = 2;
        for (var i in digitalData.page.category) {
            if (digitalData.page.category.hasOwnProperty(i)) {
                digitalData.page.category[i] = pathTokens[x];
            }
            x++;
        }
}

// Page Data  -- NOTE!  jcrPath is defined in datalayer.jsp
//This list of tokens should be considered immutable.
//Both functions depend on having the complete array.

try {
    if (jcrPath){
        var pathTokens = getJCRPathTokens(jcrPath);
        setDigitalDataPageName(pathTokens);
        setDigitalDataCategories(pathTokens);    
    }
} catch(err) {
    digitalData.errorInfo.errorMessage = err;    
}





