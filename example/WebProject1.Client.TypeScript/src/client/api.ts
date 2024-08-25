import { send } from "../base";

export interface ComplexObject {
  id: string;
  birthday: string | null;
  age: number;
  addresses: string[];
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
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromQuery`,
      method: 'GET',
      params: { ...model },
    });
  }
  public GetModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/GetModelFromForm`,
      method: 'GET',
      forms: { ...model },
    });
  }
  public PostModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromQuery`,
      method: 'POST',
      params: { ...model },
    });
  }
  public PostModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
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
      forms: { ...model },
    });
  }
  public PutModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromDefault`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromQuery`,
      method: 'PUT',
      params: { ...model },
    });
  }
  public PutModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
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
      forms: { ...model },
    });
  }
  public DeleteModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromDefault`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { ...model },
    });
  }
  public DeleteModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return send({
      url: `/Complex/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { ...model },
    });
  }
}

export const complexApi = new ComplexApi();


class ComplexArrayApi {

  public GetModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/GetModelFromForm`,
      method: 'GET',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: Array<ComplexObject>): Promise<ComplexObject[]> {
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
      body: model,
    });
  }
  public PutModelFromQuery(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: Array<ComplexObject>): Promise<ComplexObject[]> {
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
      body: model,
    });
  }
  public DeleteModelFromQuery(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: ComplexObject[]): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: Array<ComplexObject>): Promise<ComplexObject[]> {
    return send({
      url: `/ComplexArray/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
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
  public GetModelFromQuery(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/GetModelFromForm`,
      method: 'GET',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: SimpleModel | string): Promise<SimpleModel> {
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
  public PutModelFromQuery(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: SimpleModel | string): Promise<SimpleModel> {
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
  public DeleteModelFromQuery(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: SimpleModel | string): Promise<SimpleModel> {
    return send({
      url: `/Simple/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const simpleApi = new SimpleApi();


class SimpleArrayApi {

  public GetModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/GetModelFromForm`,
      method: 'GET',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
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
      body: model,
    });
  }
  public PutModelFromQuery(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
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
      body: model,
    });
  }
  public DeleteModelFromQuery(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: SimpleModel[]): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: Array<SimpleModel | string>): Promise<SimpleModel[]> {
    return send({
      url: `/SimpleArray/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
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
  public GetModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: string): Promise<string> {
    return send({
      url: `/DateTime/GetModelFromForm`,
      method: 'GET',
      forms: { model },
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
  public PostModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/DateTime/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
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
  public PutModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/DateTime/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
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
  public DeleteModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: string): Promise<string> {
    return send({
      url: `/DateTime/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
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
  public GetModelFromHeader(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: number): Promise<number> {
    return send({
      url: `/Int/GetModelFromForm`,
      method: 'GET',
      forms: { model },
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
  public PostModelFromHeader(model: number): Promise<number> {
    return send({
      url: `/Int/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
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
  public PutModelFromHeader(model: number): Promise<number> {
    return send({
      url: `/Int/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
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
  public DeleteModelFromHeader(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: number): Promise<number> {
    return send({
      url: `/Int/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const intApi = new IntApi();


class IntArrayApi {

  public GetModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/GetModelFromForm`,
      method: 'GET',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: Array<number>): Promise<number[]> {
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
      body: model,
    });
  }
  public PutModelFromQuery(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: Array<number>): Promise<number[]> {
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
      body: model,
    });
  }
  public DeleteModelFromQuery(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: number[]): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: Array<number>): Promise<number[]> {
    return send({
      url: `/IntArray/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
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
  public GetModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: string): Promise<string> {
    return send({
      url: `/String/GetModelFromForm`,
      method: 'GET',
      forms: { model },
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
  public PostModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/String/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
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
  public PutModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/String/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
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
  public DeleteModelFromHeader(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: string): Promise<string> {
    return send({
      url: `/String/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const stringApi = new StringApi();


class StringArrayApi {

  public GetModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/GetModelFromForm`,
      method: 'GET',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: Array<string>): Promise<string[]> {
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
      body: model,
    });
  }
  public PutModelFromQuery(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: Array<string>): Promise<string[]> {
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
      body: model,
    });
  }
  public DeleteModelFromQuery(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: string[]): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: Array<string>): Promise<string[]> {
    return send({
      url: `/StringArray/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const stringArrayApi = new StringArrayApi();


class BodyApi {

  public GetBody(model: number): Promise<number> {
    return send({
      url: `/Body/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: number): Promise<number> {
    return send({
      url: `/Body/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: number): Promise<number> {
    return send({
      url: `/Body/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: number): Promise<number> {
    return send({
      url: `/Body/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const bodyApi = new BodyApi();


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
  public SumArray(a: Array<number>, b: Array<number>): Promise<number> {
    return send({
      url: `/Header/SumArray`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumArrayObject(a: Array<SimpleModel | string>, b: Array<SimpleModel | string>): Promise<number> {
    return send({
      url: `/Header/SumArrayObject`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumWithObject(a: number, b: number, simple: SimpleModel | string): Promise<number> {
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
  public SumWithObject(a: number, b: number, complex: ComplexObject, simple: SimpleModel | string): Promise<number> {
    return send({
      url: `/Query/SumWithObject`,
      method: 'GET',
      headers: { complex, simple },
      params: { a, b },
    });
  }
}

export const queryApi = new QueryApi();