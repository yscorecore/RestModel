import { ApiClientBase } from "./base";
import { ComplexObject } from "./model";
import { SimpleModel } from "./model";

class ComplexApi extends ApiClientBase {

  public GetModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromQuery`,
      method: 'GET',
      params: { ...model },
    });
  }
  public GetModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/GetModelFromForm`,
      method: 'POST',
      forms: { ...model },
    });
  }
  public PostModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PostModelFromQuery`,
      method: 'POST',
      params: { ...model },
    });
  }
  public PostModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PostModelFromForm`,
      method: 'POST',
      forms: { ...model },
    });
  }
  public PutModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PutModelFromDefault`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PutModelFromQuery`,
      method: 'PUT',
      params: { ...model },
    });
  }
  public PutModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/PutModelFromForm`,
      method: 'PUT',
      forms: { ...model },
    });
  }
  public DeleteModelFromDefault(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/DeleteModelFromDefault`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromQuery(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { ...model },
    });
  }
  public DeleteModelFromHeader(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/Complex/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { ...model },
    });
  }
}

export const complexApi = new ComplexApi();


class SimpleApi extends ApiClientBase {

  public GetModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/GetModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/Simple/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const simpleApi = new SimpleApi();


class DateTimeApi extends ApiClientBase {

  public GetModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/GetModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/DateTime/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const dateTimeApi = new DateTimeApi();


class IntApi extends ApiClientBase {

  public GetModelFromDefault(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: number): Promise<number> {
    return this.send({
      url: `/Int/GetModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: number): Promise<number> {
    return this.send({
      url: `/Int/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: number): Promise<number> {
    return this.send({
      url: `/Int/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: number): Promise<number> {
    return this.send({
      url: `/Int/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: number): Promise<number> {
    return this.send({
      url: `/Int/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: number): Promise<number> {
    return this.send({
      url: `/Int/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: number): Promise<number> {
    return this.send({
      url: `/Int/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: number): Promise<number> {
    return this.send({
      url: `/Int/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: number): Promise<number> {
    return this.send({
      url: `/Int/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: number): Promise<number> {
    return this.send({
      url: `/Int/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: number): Promise<number> {
    return this.send({
      url: `/Int/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: number): Promise<number> {
    return this.send({
      url: `/Int/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: number): Promise<number> {
    return this.send({
      url: `/Int/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: number): Promise<number> {
    return this.send({
      url: `/Int/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: number): Promise<number> {
    return this.send({
      url: `/Int/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: number): Promise<number> {
    return this.send({
      url: `/Int/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const intApi = new IntApi();


class IntArrayApi extends ApiClientBase {

  public GetModelFromDefault(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromDefault`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnTask(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromQuery(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/GetModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PostModelFromDefault`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromQuery(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PutModelFromDefault`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromQuery(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/DeleteModelFromDefault`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromQuery(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: number[]): Promise<number[]> {
    return this.send({
      url: `/IntArray/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const intArrayApi = new IntArrayApi();


class StringApi extends ApiClientBase {

  public GetModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromDefault`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnTask(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromDefaultAndReturnTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromDefaultAndReturnValueTask(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromDefaultAndReturnValueTask`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromQuery`,
      method: 'GET',
      params: { model },
    });
  }
  public GetModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromHeader`,
      method: 'GET',
      headers: { model },
    });
  }
  public GetModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromBody`,
      method: 'GET',
      body: model,
    });
  }
  public GetModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/String/GetModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PostModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/String/PostModelFromDefault`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/String/PostModelFromQuery`,
      method: 'POST',
      params: { model },
    });
  }
  public PostModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/String/PostModelFromHeader`,
      method: 'POST',
      headers: { model },
    });
  }
  public PostModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/String/PostModelFromBody`,
      method: 'POST',
      body: model,
    });
  }
  public PostModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/String/PostModelFromForm`,
      method: 'POST',
      forms: { model },
    });
  }
  public PutModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/String/PutModelFromDefault`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/String/PutModelFromQuery`,
      method: 'PUT',
      params: { model },
    });
  }
  public PutModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/String/PutModelFromHeader`,
      method: 'PUT',
      headers: { model },
    });
  }
  public PutModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/String/PutModelFromBody`,
      method: 'PUT',
      body: model,
    });
  }
  public PutModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/String/PutModelFromForm`,
      method: 'PUT',
      forms: { model },
    });
  }
  public DeleteModelFromDefault(model: string): Promise<string> {
    return this.send({
      url: `/String/DeleteModelFromDefault`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromQuery(model: string): Promise<string> {
    return this.send({
      url: `/String/DeleteModelFromQuery`,
      method: 'DELETE',
      params: { model },
    });
  }
  public DeleteModelFromHeader(model: string): Promise<string> {
    return this.send({
      url: `/String/DeleteModelFromHeader`,
      method: 'DELETE',
      headers: { model },
    });
  }
  public DeleteModelFromBody(model: string): Promise<string> {
    return this.send({
      url: `/String/DeleteModelFromBody`,
      method: 'DELETE',
      body: model,
    });
  }
  public DeleteModelFromForm(model: string): Promise<string> {
    return this.send({
      url: `/String/DeleteModelFromForm`,
      method: 'DELETE',
      forms: { model },
    });
  }
}

export const stringApi = new StringApi();


class BodyApi extends ApiClientBase {

  public GetBody(model: number): Promise<number> {
    return this.send({
      url: `/Body/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: number): Promise<number> {
    return this.send({
      url: `/Body/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: number): Promise<number> {
    return this.send({
      url: `/Body/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: number): Promise<number> {
    return this.send({
      url: `/Body/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const bodyApi = new BodyApi();


class StringArrayBodyApi extends ApiClientBase {

  public GetBody(model: string[]): Promise<string[]> {
    return this.send({
      url: `/StringArrayBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: string[]): Promise<string[]> {
    return this.send({
      url: `/StringArrayBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: string[]): Promise<string[]> {
    return this.send({
      url: `/StringArrayBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: string[]): Promise<string[]> {
    return this.send({
      url: `/StringArrayBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const stringArrayBodyApi = new StringArrayBodyApi();


class SimpleModelBodyApi extends ApiClientBase {

  public GetBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/SimpleModelBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/SimpleModelBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/SimpleModelBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: SimpleModel): Promise<SimpleModel> {
    return this.send({
      url: `/SimpleModelBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const simpleModelBodyApi = new SimpleModelBodyApi();


class ComplexModelBodyApi extends ApiClientBase {

  public GetBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/ComplexModelBody/GetBody`,
      method: 'GET',
      body: model,
    });
  }
  public PostBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/ComplexModelBody/PostBody`,
      method: 'POST',
      body: model,
    });
  }
  public PutBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/ComplexModelBody/PutBody`,
      method: 'PUT',
      body: model,
    });
  }
  public DeleteBody(model: ComplexObject): Promise<ComplexObject> {
    return this.send({
      url: `/ComplexModelBody/DeleteBody`,
      method: 'DELETE',
      body: model,
    });
  }
}

export const complexModelBodyApi = new ComplexModelBodyApi();


class HeaderApi extends ApiClientBase {

  public Sum(a: number, b: number): Promise<number> {
    return this.send({
      url: `/Header/Sum`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumArray(a: number[], b: number[]): Promise<number> {
    return this.send({
      url: `/Header/SumArray`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumArrayObject(a: SimpleModel[], b: SimpleModel[]): Promise<number> {
    return this.send({
      url: `/Header/SumArrayObject`,
      method: 'GET',
      headers: { a, b },
    });
  }
  public SumWithObject(a: number, b: number, simple: SimpleModel): Promise<number> {
    return this.send({
      url: `/Header/SumWithObject`,
      method: 'GET',
      headers: { a, b, simple },
    });
  }
}

export const headerApi = new HeaderApi();


class QueryApi extends ApiClientBase {

  public Sum(a: number, b: number): Promise<number> {
    return this.send({
      url: `/Query/Sum`,
      method: 'GET',
      params: { a, b },
    });
  }
  public SumWithObject(a: number, b: number, complex: ComplexObject, simple: SimpleModel): Promise<number> {
    return this.send({
      url: `/Query/SumWithObject`,
      method: 'GET',
      headers: { complex, simple },
      params: { a, b },
    });
  }
}

export const queryApi = new QueryApi();


class RouteApi extends ApiClientBase {

  public Sum(a: number, b: number): Promise<number> {
    return this.send({
      url: `/Route/Sum/a/${b}`,
      method: 'GET',
    });
  }
  public SumWithObject(a: number, b: number, simple: SimpleModel): Promise<number> {
    return this.send({
      url: `/Route/SumWithObject/${a}/${b}/{c}/${simple}`,
      method: 'GET',
    });
  }
}

export const routeApi = new RouteApi();

