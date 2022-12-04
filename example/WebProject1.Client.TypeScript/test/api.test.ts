import { intApi } from "../src/client/api";
test('intApi', async () => {
   const val: number = 100;
   const res = await intApi.GetModelFromHeader(val);
   expect(res).toBe(val);
});

// test('intApi1', async () => {
//    const val: number = 100;
//    const res = await intApi.GetModelFromHeader(val);
//    expect(res).toBe(val);
// });
