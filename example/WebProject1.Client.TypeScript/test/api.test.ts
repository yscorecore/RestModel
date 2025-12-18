import { headerApi, routeApi, queryApi, complexApi, ComplexObject, complexModelBodyApi, simpleModelBodyApi, SimpleModel, stringArrayBodyApi, intBodyApi, stringArrayApi, stringApi, intArrayApi, intApi, dateTimeApi, simpleArrayApi, simpleApi, complexArrayApi } from "../src/client/api";

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
         age: 4,
      }
      let res = await queryApi.SumWithObject(1, 2, complex, 'a|3')
      expect(res).toBe(10);
   })
})



describe("complexModelBodyApi", () => {
   const input: ComplexObject = { id: 'id', age: 1 };
   const expected: ComplexObject = { ...input, addresses: null, birthday: null };
   test("GetBody", async () => {
      let res = await complexModelBodyApi.GetBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostBody", async () => {
      let res = await complexModelBodyApi.PostBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutBody", async () => {
      let res = await complexModelBodyApi.PutBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteBody", async () => {
      let res = await complexModelBodyApi.DeleteBody(input);
      expect(res).toStrictEqual(expected);
   })

})

describe("simpleModelBodyApi", () => {
   const input: SimpleModel = { id: "id", age: 3 };
   const expected: SimpleModel = { id: "id", age: 3 };
   test("GetBody", async () => {
      let res = await simpleModelBodyApi.GetBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostBody", async () => {
      let res = await simpleModelBodyApi.PostBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutBody", async () => {
      let res = await simpleModelBodyApi.PutBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteBody", async () => {
      let res = await simpleModelBodyApi.DeleteBody(input);
      expect(res).toStrictEqual(expected);
   })
})

describe("stringArrayBodyApi", () => {
   const input: string[] = ['abc'];
   const expected: string[] = ['abc'];
   test("GetBody", async () => {
      let res = await stringArrayBodyApi.GetBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostBody", async () => {
      let res = await stringArrayBodyApi.PostBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutBody", async () => {
      let res = await stringArrayBodyApi.PutBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteBody", async () => {
      let res = await stringArrayBodyApi.DeleteBody(input);
      expect(res).toStrictEqual(expected);
   })

})

describe("intBodyApi", () => {
   const input = 1;
   const expected = 1;
   test("GetBody", async () => {
      let res = await intBodyApi.GetBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostBody", async () => {
      let res = await intBodyApi.PostBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutBody", async () => {
      let res = await intBodyApi.PutBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteBody", async () => {
      let res = await intBodyApi.DeleteBody(input);
      expect(res).toStrictEqual(expected);
   })

})


describe("stringArrayApi", () => {
   const input = ['a', 'b'];
   const expected = ['a', 'b'];
   test("GetModelFromDefault", async () => {
      let res = await stringArrayApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await stringArrayApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await stringArrayApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await stringArrayApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await stringArrayApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await stringArrayApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await stringArrayApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromBody", async () => {
      let res = await stringArrayApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await stringArrayApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await stringArrayApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await stringArrayApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await stringArrayApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await stringArrayApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await stringArrayApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await stringArrayApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await stringArrayApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})


describe("stringApi", () => {
   const input = 'a';
   const expected = 'a';
   test("GetModelFromDefault", async () => {
      let res = await stringApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await stringApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await stringApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await stringApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await stringApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromDefault", async () => {
      let res = await stringApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await stringApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await stringApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await stringApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await stringApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await stringApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await stringApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await stringApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await stringApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await stringApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await stringApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

})


describe("intArrayApi", () => {
   const input = [1, 2];
   const expected = [1, 2];
   test("GetModelFromDefault", async () => {
      let res = await intArrayApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await intArrayApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await intArrayApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await intArrayApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await intArrayApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromDefault", async () => {
      let res = await intArrayApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await intArrayApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromBody", async () => {
      let res = await intArrayApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await intArrayApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await intArrayApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await intArrayApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await intArrayApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await intArrayApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await intArrayApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await intArrayApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromBody", async () => {
      let res = await intArrayApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})



describe("intApi", () => {
   const input = 2;
   const expected = 2;
   test("GetModelFromDefault", async () => {
      let res = await intApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await intApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await intApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await intApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await intApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromDefault", async () => {
      let res = await intApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await intApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await intApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await intApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await intApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await intApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromBody", async () => {
      let res = await intApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await intApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await intApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await intApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromBody", async () => {
      let res = await intApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})


describe("dateTimeApi", () => {
   const input = '2024-09-01';
   const expected = '2024-09-01T00:00:00';
   test("GetModelFromDefault", async () => {
      let res = await dateTimeApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await dateTimeApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await dateTimeApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await dateTimeApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await dateTimeApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await dateTimeApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await dateTimeApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await dateTimeApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await dateTimeApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await dateTimeApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await dateTimeApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await dateTimeApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await dateTimeApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await dateTimeApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await dateTimeApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await dateTimeApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})



describe("simpleArrayApi", () => {
   const input = ['id|1'];
   const inputObj = [{ id: 'a', age: 1 }];
   const expected = [{ id: 'a', age: 1 }];
   test("GetModelFromDefault", async () => {
      let res = await simpleArrayApi.GetModelFromDefault(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await simpleArrayApi.GetModelFromDefaultAndReturnTask(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await simpleArrayApi.GetModelFromDefaultAndReturnValueTask(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await simpleArrayApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await simpleArrayApi.GetModelFromBody(inputObj);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await simpleArrayApi.PostModelFromDefault(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await simpleArrayApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await simpleArrayApi.PostModelFromBody(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await simpleArrayApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await simpleArrayApi.PutModelFromDefault(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await simpleArrayApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await simpleArrayApi.PutModelFromBody(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await simpleArrayApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await simpleArrayApi.DeleteModelFromDefault(inputObj);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await simpleArrayApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await simpleArrayApi.DeleteModelFromBody(inputObj);
      expect(res).toStrictEqual(expected);
   })


})


describe("simpleApi", () => {
   const input = { id: 'id', age: 1 };
   const inputStr = "id|1";
   const expected = { id: 'id', age: 1 };
   test("GetModelFromDefault", async () => {
      let res = await simpleApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await simpleApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await simpleApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await simpleApi.GetModelFromQuery(inputStr);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await simpleApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await simpleApi.PostModelFromDefault(inputStr);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await simpleApi.PostModelFromQuery(inputStr);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await simpleApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await simpleApi.PostModelFromForm(inputStr);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await simpleApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await simpleApi.PutModelFromQuery(inputStr);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await simpleApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await simpleApi.PutModelFromForm(inputStr);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await simpleApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await simpleApi.DeleteModelFromQuery(inputStr);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await simpleApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})


describe("complexArrayApi", () => {
   const input: ComplexObject[] = [{ id: 'id', age: 1 }];
   const expected: ComplexObject[] = [{ id: 'id', age: 1, birthday: null, addresses: null }];
   test("GetModelFromDefault", async () => {
      let res = await complexArrayApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await complexArrayApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await complexArrayApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await complexArrayApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await complexArrayApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await complexArrayApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await complexArrayApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await complexArrayApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await complexArrayApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await complexArrayApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await complexArrayApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await complexArrayApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await complexArrayApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await complexArrayApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await complexArrayApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await complexArrayApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


})


describe("complexApi", () => {
   const input: ComplexObject = { id: 'id', age: 1, addresses: ["a", "b"] };
   const expected: ComplexObject = { id: 'id', age: 1, birthday: null, addresses: ["a", "b"] };
   test("GetModelFromDefault", async () => {
      let res = await complexApi.GetModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnTask", async () => {
      let res = await complexApi.GetModelFromDefaultAndReturnTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromDefaultAndReturnValueTask", async () => {
      let res = await complexApi.GetModelFromDefaultAndReturnValueTask(input);
      expect(res).toStrictEqual(expected);
   })

   test("GetModelFromQuery", async () => {
      let res = await complexApi.GetModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("GetModelFromBody", async () => {
      let res = await complexApi.GetModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromDefault", async () => {
      let res = await complexApi.PostModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromQuery", async () => {
      let res = await complexApi.PostModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PostModelFromBody", async () => {
      let res = await complexApi.PostModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PostModelFromForm", async () => {
      let res = await complexApi.PostModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromDefault", async () => {
      let res = await complexApi.PutModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromQuery", async () => {
      let res = await complexApi.PutModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("PutModelFromBody", async () => {
      let res = await complexApi.PutModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

   test("PutModelFromForm", async () => {
      let res = await complexApi.PutModelFromForm(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromDefault", async () => {
      let res = await complexApi.DeleteModelFromDefault(input);
      expect(res).toStrictEqual(expected);
   })

   test("DeleteModelFromQuery", async () => {
      let res = await complexApi.DeleteModelFromQuery(input);
      expect(res).toStrictEqual(expected);
   })


   test("DeleteModelFromBody", async () => {
      let res = await complexApi.DeleteModelFromBody(input);
      expect(res).toStrictEqual(expected);
   })

})
