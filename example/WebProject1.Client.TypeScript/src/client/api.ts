import { send } from "../base";

export interface ComplexObject {
    id: string;
    birthday?: string | null;
    age: number;
    addresses?: Array<string | null> | null;
}
export interface SimpleModel {
    id: string;
    age: number;
}

class ComplexApi {

  public GetModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const complexApi = new ComplexApi();


class ComplexArrayApi {

  public GetModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const complexArrayApi = new ComplexArrayApi();


class SimpleApi {

  public GetModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const simpleApi = new SimpleApi();


class SimpleArrayApi {

  public GetModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const simpleArrayApi = new SimpleArrayApi();


class DateTimeApi {

  public GetModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/DateTime/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/DateTime/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<string> {
    return send({
      url: `/DateTime/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/DateTime/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/DateTime/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<string> {
    return send({
      url: `/DateTime/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const dateTimeApi = new DateTimeApi();


class IntApi {

  public GetModelFromDefault(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: number): Promise<number> {
    return send({
      url: `/Int/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: number): Promise<number> {
    return send({
      url: `/Int/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: number): Promise<number> {
    return send({
      url: `/Int/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: number): Promise<number> {
    return send({
      url: `/Int/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: number): Promise<number> {
    return send({
      url: `/Int/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: number): Promise<number> {
    return send({
      url: `/Int/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const intApi = new IntApi();


class IntArrayApi {

  public GetModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const intArrayApi = new IntArrayApi();


class StringApi {

  public GetModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/String/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/String/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<string> {
    return send({
      url: `/String/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/String/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/String/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<string> {
    return send({
      url: `/String/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const stringApi = new StringApi();


class StringArrayApi {

  public GetModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const stringArrayApi = new StringArrayApi();


class TimeSpanApi {

  public GetModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return send({
      url: `/TimeSpan/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const timeSpanApi = new TimeSpanApi();


class TimeSpanArrayApi {

  public GetModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/TimeSpanArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const timeSpanArrayApi = new TimeSpanArrayApi();


class IntBodyApi {

  public GetBody(model: number): Promise<number> {
    return send({
      url: `/IntBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: number): Promise<number> {
    return send({
      url: `/IntBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: number): Promise<number> {
    return send({
      url: `/IntBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: number): Promise<number> {
    return send({
      url: `/IntBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const intBodyApi = new IntBodyApi();


class StringArrayBodyApi {

  public GetBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArrayBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArrayBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArrayBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArrayBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const stringArrayBodyApi = new StringArrayBodyApi();


class SimpleModelBodyApi {

  public GetBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/SimpleModelBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/SimpleModelBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/SimpleModelBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/SimpleModelBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const simpleModelBodyApi = new SimpleModelBodyApi();


class ComplexModelBodyApi {

  public GetBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/ComplexModelBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/ComplexModelBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/ComplexModelBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/ComplexModelBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const complexModelBodyApi = new ComplexModelBodyApi();


class HeaderApi {

  public Sum(a: number, b: number): Promise<number> {
    return send({
      url: `/Header/Sum`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumArray(a: number[], b: number[]): Promise<number> {
    return send({
      url: `/Header/SumArray`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumArrayObject(a: string[], b: string[]): Promise<number> {
    return send({
      url: `/Header/SumArrayObject`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumWithObject(a: number, b: number, simple: string): Promise<number> {
    return send({
      url: `/Header/SumWithObject`,
      method: 'GET',
      headers: { a, b, simple },
    });
  }
}

export const headerApi = new HeaderApi();


class QueryApi {

  public Sum(a: number, b: number): Promise<number> {
    return send({
      url: `/Query/Sum`,
      method: 'GET',
      params: { a, b },
    });
  }
  public SumWithObject(a: number, b: number, complex: ComplexObject, simple: string): Promise<number> {
    return send({
      url: `/Query/SumWithObject`,
      method: 'GET',
      params: { a, b, complex, simple },
    });
  }
}

export const queryApi = new QueryApi();


class RouteApi {

  public Sum(a: number, b: number): Promise<number> {
    return send({
      url: `/Route/Sum/${a}/${b}`,
      method: 'GET',
    });
  }
  public SumWithObject(a: number, b: number, simple: string): Promise<number> {
    return send({
      url: `/Route/SumWithObject/${a}/${b}/${simple}`,
      method: 'GET',
    });
  }
}

export const routeApi = new RouteApi();

