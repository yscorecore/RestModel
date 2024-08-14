import { complexApi, intApi, dateTimeApi, intArrayApi, bodyApi, queryApi, routeApi, headerApi, stringApi, simpleApi, simpleModelBodyApi, complexModelBodyApi, stringArrayBodyApi } from "../src/client/api";
import { ComplexObject, SimpleModel } from "../src/client/model";





// describe("ComplexApi", function () {
//    const val: ComplexObject = {
//       id: '1',
//       birthday: '2022-12-04T00:00:00',
//       age: 1,
//       addresses: ['address1']
//    }
//    test('GetModelFromDefault', async () => {
//       const res = await complexApi.GetModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnTask', async () => {
//       const res = await complexApi.GetModelFromDefaultAndReturnTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnValueTask', async () => {
//       const res = await complexApi.GetModelFromDefaultAndReturnValueTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromQuery', async () => {
//       const res = await complexApi.GetModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromHeader', async () => {
//       const res = await complexApi.GetModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromBody', async () => {
//       const res = await complexApi.GetModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromForm', async () => {
//       const res = await complexApi.GetModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromDefault', async () => {
//       const res = await complexApi.PostModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromQuery', async () => {
//       const res = await complexApi.PostModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromHeader', async () => {
//       const res = await complexApi.PostModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromBody', async () => {
//       const res = await complexApi.PostModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromForm', async () => {
//       const res = await complexApi.PostModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromDefault', async () => {
//       const res = await complexApi.PutModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromQuery', async () => {
//       const res = await complexApi.PutModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromHeader', async () => {
//       const res = await complexApi.PutModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromBody', async () => {
//       const res = await complexApi.PutModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromForm', async () => {
//       const res = await complexApi.PutModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromDefault', async () => {
//       const res = await complexApi.DeleteModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromQuery', async () => {
//       const res = await complexApi.DeleteModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromHeader', async () => {
//       const res = await complexApi.DeleteModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromBody', async () => {
//       const res = await complexApi.DeleteModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromForm', async () => {
//       const res = await complexApi.DeleteModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
// });


class SimpleModel1 {
   public constructor(public id: string, public age: number) {
   }
   public toString() {
      return `${this.id},${this.age}`;
   }
}



// describe("SimpleApi", function () {
//    const val: SimpleModel = new SimpleModel1('a', 10);
//    test('GetModelFromDefault', async () => {
//       const res = await simpleApi.GetModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnTask', async () => {
//       const res = await simpleApi.GetModelFromDefaultAndReturnTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnValueTask', async () => {
//       const res = await simpleApi.GetModelFromDefaultAndReturnValueTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromQuery', async () => {
//       const res = await simpleApi.GetModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromHeader', async () => {
//       const res = await simpleApi.GetModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromBody', async () => {
//       const res = await simpleApi.GetModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromForm', async () => {
//       const res = await simpleApi.GetModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromDefault', async () => {
//       const res = await simpleApi.PostModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromQuery', async () => {
//       const res = await simpleApi.PostModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromHeader', async () => {
//       const res = await simpleApi.PostModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromBody', async () => {
//       const res = await simpleApi.PostModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromForm', async () => {
//       const res = await simpleApi.PostModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromDefault', async () => {
//       const res = await simpleApi.PutModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromQuery', async () => {
//       const res = await simpleApi.PutModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromHeader', async () => {
//       const res = await simpleApi.PutModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromBody', async () => {
//       const res = await simpleApi.PutModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromForm', async () => {
//       const res = await simpleApi.PutModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromDefault', async () => {
//       const res = await simpleApi.DeleteModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromQuery', async () => {
//       const res = await simpleApi.DeleteModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromHeader', async () => {
//       const res = await simpleApi.DeleteModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromBody', async () => {
//       const res = await simpleApi.DeleteModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromForm', async () => {
//       const res = await simpleApi.DeleteModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("DateTimeApi", function () {
//    const val = '2022-12-04T00:00:00';
//    test('GetModelFromDefault', async () => {
//       const res = await dateTimeApi.GetModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnTask', async () => {
//       const res = await dateTimeApi.GetModelFromDefaultAndReturnTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnValueTask', async () => {
//       const res = await dateTimeApi.GetModelFromDefaultAndReturnValueTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromQuery', async () => {
//       const res = await dateTimeApi.GetModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromHeader', async () => {
//       const res = await dateTimeApi.GetModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromBody', async () => {
//       const res = await dateTimeApi.GetModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromForm', async () => {
//       const res = await dateTimeApi.GetModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromDefault', async () => {
//       const res = await dateTimeApi.PostModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromQuery', async () => {
//       const res = await dateTimeApi.PostModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromHeader', async () => {
//       const res = await dateTimeApi.PostModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromBody', async () => {
//       const res = await dateTimeApi.PostModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromForm', async () => {
//       const res = await dateTimeApi.PostModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromDefault', async () => {
//       const res = await dateTimeApi.PutModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromQuery', async () => {
//       const res = await dateTimeApi.PutModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromHeader', async () => {
//       const res = await dateTimeApi.PutModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromBody', async () => {
//       const res = await dateTimeApi.PutModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromForm', async () => {
//       const res = await dateTimeApi.PutModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromDefault', async () => {
//       const res = await dateTimeApi.DeleteModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromQuery', async () => {
//       const res = await dateTimeApi.DeleteModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromHeader', async () => {
//       const res = await dateTimeApi.DeleteModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromBody', async () => {
//       const res = await dateTimeApi.DeleteModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromForm', async () => {
//       const res = await dateTimeApi.DeleteModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
// });




describe("IntApi", function () {
   jest.setTimeout(10000000);
   const val = 1;
   // test('GetModelFromDefault', async () => {
   //    const res = await intApi.GetModelFromDefault(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('GetModelFromDefaultAndReturnTask', async () => {
   //    const res = await intApi.GetModelFromDefaultAndReturnTask(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('GetModelFromDefaultAndReturnValueTask', async () => {
   //    const res = await intApi.GetModelFromDefaultAndReturnValueTask(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('GetModelFromQuery', async () => {
   //    const res = await intApi.GetModelFromQuery(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('GetModelFromHeader', async () => {
   //    const res = await intApi.GetModelFromHeader(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('GetModelFromBody', async () => {
   //    const res = await intApi.GetModelFromBody(val);
   //    expect(res).toStrictEqual(val);
   // });
   
   test('GetModelFromForm', async () => {
      
      const res = await intApi.GetModelFromForm(val);
      expect(res).toStrictEqual(val);
   });
   // test('PostModelFromDefault', async () => {
   //    const res = await intApi.PostModelFromDefault(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PostModelFromQuery', async () => {
   //    const res = await intApi.PostModelFromQuery(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PostModelFromHeader', async () => {
   //    const res = await intApi.PostModelFromHeader(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PostModelFromBody', async () => {
   //    const res = await intApi.PostModelFromBody(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PostModelFromForm', async () => {
   //    const res = await intApi.PostModelFromForm(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PutModelFromDefault', async () => {
   //    const res = await intApi.PutModelFromDefault(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PutModelFromQuery', async () => {
   //    const res = await intApi.PutModelFromQuery(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PutModelFromHeader', async () => {
   //    const res = await intApi.PutModelFromHeader(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PutModelFromBody', async () => {
   //    const res = await intApi.PutModelFromBody(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('PutModelFromForm', async () => {
   //    const res = await intApi.PutModelFromForm(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('DeleteModelFromDefault', async () => {
   //    const res = await intApi.DeleteModelFromDefault(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('DeleteModelFromQuery', async () => {
   //    const res = await intApi.DeleteModelFromQuery(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('DeleteModelFromHeader', async () => {
   //    const res = await intApi.DeleteModelFromHeader(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('DeleteModelFromBody', async () => {
   //    const res = await intApi.DeleteModelFromBody(val);
   //    expect(res).toStrictEqual(val);
   // });
   // test('DeleteModelFromForm', async () => {
   //    const res = await intApi.DeleteModelFromForm(val);
   //    expect(res).toStrictEqual(val);
   // });
});




// describe("IntArrayApi", function () {
//    const val = [1, 2, 3];
//    test('GetModelFromDefault', async () => {
//       const res = await intArrayApi.GetModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnTask', async () => {
//       const res = await intArrayApi.GetModelFromDefaultAndReturnTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnValueTask', async () => {
//       const res = await intArrayApi.GetModelFromDefaultAndReturnValueTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromQuery', async () => {
//       const res = await intArrayApi.GetModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromHeader', async () => {
//       const res = await intArrayApi.GetModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromBody', async () => {
//       const res = await intArrayApi.GetModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromForm', async () => {
//       const res = await intArrayApi.GetModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromDefault', async () => {
//       const res = await intArrayApi.PostModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromQuery', async () => {
//       const res = await intArrayApi.PostModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromHeader', async () => {
//       const res = await intArrayApi.PostModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromBody', async () => {
//       const res = await intArrayApi.PostModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromForm', async () => {
//       const res = await intArrayApi.PostModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromDefault', async () => {
//       const res = await intArrayApi.PutModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromQuery', async () => {
//       const res = await intArrayApi.PutModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromHeader', async () => {
//       const res = await intArrayApi.PutModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromBody', async () => {
//       const res = await intArrayApi.PutModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromForm', async () => {
//       const res = await intArrayApi.PutModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromDefault', async () => {
//       const res = await intArrayApi.DeleteModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromQuery', async () => {
//       const res = await intArrayApi.DeleteModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromHeader', async () => {
//       const res = await intArrayApi.DeleteModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromBody', async () => {
//       const res = await intArrayApi.DeleteModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromForm', async () => {
//       const res = await intArrayApi.DeleteModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("StringApi", function () {
//    const val = 'abc';
//    test('GetModelFromDefault', async () => {
//       const res = await stringApi.GetModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnTask', async () => {
//       const res = await stringApi.GetModelFromDefaultAndReturnTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromDefaultAndReturnValueTask', async () => {
//       const res = await stringApi.GetModelFromDefaultAndReturnValueTask(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromQuery', async () => {
//       const res = await stringApi.GetModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromHeader', async () => {
//       const res = await stringApi.GetModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromBody', async () => {
//       const res = await stringApi.GetModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('GetModelFromForm', async () => {
//       const res = await stringApi.GetModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromDefault', async () => {
//       const res = await stringApi.PostModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromQuery', async () => {
//       const res = await stringApi.PostModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromHeader', async () => {
//       const res = await stringApi.PostModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromBody', async () => {
//       const res = await stringApi.PostModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostModelFromForm', async () => {
//       const res = await stringApi.PostModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromDefault', async () => {
//       const res = await stringApi.PutModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromQuery', async () => {
//       const res = await stringApi.PutModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromHeader', async () => {
//       const res = await stringApi.PutModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromBody', async () => {
//       const res = await stringApi.PutModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutModelFromForm', async () => {
//       const res = await stringApi.PutModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromDefault', async () => {
//       const res = await stringApi.DeleteModelFromDefault(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromQuery', async () => {
//       const res = await stringApi.DeleteModelFromQuery(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromHeader', async () => {
//       const res = await stringApi.DeleteModelFromHeader(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromBody', async () => {
//       const res = await stringApi.DeleteModelFromBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteModelFromForm', async () => {
//       const res = await stringApi.DeleteModelFromForm(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("BodyApi", function () {
//    const val = 2;
//    test('GetBody', async () => {
//       const res = await bodyApi.GetBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostBody', async () => {
//       const res = await bodyApi.PostBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutBody', async () => {
//       const res = await bodyApi.PutBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteBody', async () => {
//       const res = await bodyApi.DeleteBody(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("StringArrayBodyApi", function () {
//    const val = ['abc', 'bcd'];
//    test('GetBody', async () => {
//       const res = await stringArrayBodyApi.GetBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostBody', async () => {
//       const res = await stringArrayBodyApi.PostBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutBody', async () => {
//       const res = await stringArrayBodyApi.PutBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteBody', async () => {
//       const res = await stringArrayBodyApi.DeleteBody(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("SimpleModelBodyApi", function () {
//    const val: SimpleModel = {
//       'id': '11',
//       age: 10
//    };
//    test('GetBody', async () => {
//       const res = await simpleModelBodyApi.GetBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostBody', async () => {
//       const res = await simpleModelBodyApi.PostBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutBody', async () => {
//       const res = await simpleModelBodyApi.PutBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteBody', async () => {
//       const res = await simpleModelBodyApi.DeleteBody(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("ComplexModelBodyApi", function () {
//    const val: ComplexObject = {
//       id: '1',
//       birthday: '2022-12-04T00:00:00',
//       age: 1,
//       addresses: ['address1']
//    }
//    test('GetBody', async () => {
//       const res = await complexModelBodyApi.GetBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PostBody', async () => {
//       const res = await complexModelBodyApi.PostBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('PutBody', async () => {
//       const res = await complexModelBodyApi.PutBody(val);
//       expect(res).toStrictEqual(val);
//    });
//    test('DeleteBody', async () => {
//       const res = await complexModelBodyApi.DeleteBody(val);
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("HeaderApi", function () {
//    test('Sum', async () => {
//       const res = await headerApi.Sum(1, 2);
//       expect(res).toStrictEqual(3);
//    });
//    test('SumWithObject', async () => {
//       const res = await headerApi.SumWithObject(1, 2, { id: 'a', age: 3 });
//       expect(res).toStrictEqual(6);
//    });
// });




// describe("QueryApi", function () {
//    const val = null;
//    test('Sum', async () => {
//       const res = await queryApi.Sum(1, 2);
//       expect(res).toStrictEqual(6);
//    });
//    test('SumWithObject', async () => {
//       const res = await queryApi.SumWithObject(1, 2, {
//          id: '1',
//          birthday: '2022-12-04T00:00:00',
//          age: 3,
//          addresses: ['address1']
//       }, { id: 'a', age: 4 });
//       expect(res).toStrictEqual(val);
//    });
// });




// describe("RouteApi", function () {
//    test('Sum', async () => {
//       const res = await routeApi.Sum(1, 2);
//       expect(res).toStrictEqual(3);
//    });
//    test('SumWithObject', async () => {
//       const res = await routeApi.SumWithObject(1, 2, { id: '12', age: 3 });
//       expect(res).toStrictEqual(6);
//    });
// });

