/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAll
   */
  static readonly FindAllPath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params: {
    query: number;

  }): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.FindAllPath, 'get');
    if (params) {

      rb.query('query', params.query);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ingredient>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params: {
    query: number;

  }): Observable<Array<Ingredient>> {

    return this.findAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {

    body: Ingredient
  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.CreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ingredient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {

    body: Ingredient
  }): Observable<Ingredient> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

  /**
   * Path part for operation incrementIngredientHits
   */
  static readonly IncrementIngredientHitsPath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementIngredientHits()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incrementIngredientHits$Response(params: {

    body: Ingredient
  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.IncrementIngredientHitsPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ingredient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `incrementIngredientHits$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incrementIngredientHits(params: {

    body: Ingredient
  }): Observable<Ingredient> {

    return this.incrementIngredientHits$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

  /**
   * Path part for operation find
   */
  static readonly FindPath = '/ingredient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.FindPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ingredient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: string;

  }): Observable<Ingredient> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/ingredient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {

    body: Ingredient
  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.UpdatePath, 'put');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Ingredient>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {

    body: Ingredient
  }): Observable<Ingredient> {

    return this.update$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

  /**
   * Path part for operation findIngredient
   */
  static readonly FindIngredientPath = '/ingredient/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findIngredient()` instead.
   *
   * This method doesn't expect any request body.
   */
  findIngredient$Response(params: {
    term: string;

  }): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.FindIngredientPath, 'get');
    if (params) {

      rb.query('term', params.term);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Ingredient>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findIngredient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findIngredient(params: {
    term: string;

  }): Observable<Array<Ingredient>> {

    return this.findIngredient$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

}
