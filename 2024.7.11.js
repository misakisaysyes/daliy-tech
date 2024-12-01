let versions = ["1.45.0", "1.5", "6", "2.3.4.5"];

const sortVersions = (versions) => {
    versions = versions.map(v => v.split('.'));
    let maxLen = versions.reduce((prev, cur) => cur.length > prev ? cur.length : prev, 0);
    for (let i = maxLen - 1; i > -1; i--) {
        versions.sort((aV, bV) => {
            if (i >= aV.length || i >= bV.length) {
                return -1;
            } else {
                return  bV[i] -  aV[i];
            }
        });
    }
    return versions.map(v => v.join('.'));
}

console.log(sortVersions(versions));



