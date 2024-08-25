import { headerApi, routeApi, queryApi } from "../src/client/api";

describe("headerApi", () => {
   test("Sum", async () => {
      let res = await headerApi.Sum(1, 2);
      expect(res).toBe(3);
   })
   test("SumArray", async () => {
      let res = await headerApi.SumArray([1, 2], [3, 4])
      expect(res).toBe(10);
   })
   test("SumArrayObject", async () => {
      let res = await headerApi.SumArrayObject(['a|1', 'b|2'], ['c|3'])
      expect(res).toBe(6);
   })
   test("SumWithObject", async () => {
      let res = await headerApi.SumWithObject(1, 2, 'a|3')
      expect(res).toBe(6);
   })
})

describe("routeApi", () => {
   test("Sum", async () => {
      let res = await routeApi.Sum(1, 2);
      expect(res).toBe(3);
   })
   test("SumWithObject", async () => {
      let res = await routeApi.SumWithObject(1, 2, 'a|3');
      expect(res).toBe(6);
   })
})

describe("queryApi", () => {
   test("Sum", async () => {
      let res = await queryApi.Sum(1, 2);
      expect(res).toBe(3);
   })
   test("SumWithObject", async () => {
      let complex = {
         id: 'id',
       //  birthday: null,
         age: 4,
      }
      let res = await queryApi.SumWithObject(1, 2, complex, 'a|3')
      expect(res).toBe(10);
   })
})



