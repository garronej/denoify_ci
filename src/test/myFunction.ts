
import { myFunction } from "..";

import { getPromiseAssertionApi } from "evt/dist/tools/testing/getPromiseAssertionApi";

const { mustResolve } = getPromiseAssertionApi();

(async () => {

    await mustResolve({
        "promise": myFunction(),
        "expectedData": ["a", "b", "c"]
    });

    console.log("PASS");

})();


