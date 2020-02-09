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
   * Path part for operation ingredientControllerFindAll
   */
  static readonly IngredientControllerFindAllPath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingredientControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingredientControllerFindAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Ingredient>>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.IngredientControllerFindAllPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `ingredientControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingredientControllerFindAll(params?: {

  }): Observable<Array<Ingredient>> {

    return this.ingredientControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Ingredient>>) => r.body as Array<Ingredient>)
    );
  }

  /**
   * Path part for operation ingredientControllerCreate
   */
  static readonly IngredientControllerCreatePath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingredientControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingredientControllerCreate$Response(params: {

    body: Ingredient
  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.IngredientControllerCreatePath, 'post');
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
   * To access the full response (for headers, for example), `ingredientControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingredientControllerCreate(params: {

    body: Ingredient
  }): Observable<Ingredient> {

    return this.ingredientControllerCreate$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

  /**
   * Path part for operation ingredientControllerUpdateHits
   */
  static readonly IngredientControllerUpdateHitsPath = '/ingredient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingredientControllerUpdateHits()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingredientControllerUpdateHits$Response(params: {

    body: Ingredient
  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.IngredientControllerUpdateHitsPath, 'patch');
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
   * To access the full response (for headers, for example), `ingredientControllerUpdateHits$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ingredientControllerUpdateHits(params: {

    body: Ingredient
  }): Observable<Ingredient> {

    return this.ingredientControllerUpdateHits$Response(params).pipe(
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

  /**
   * Path part for operation ingredientControllerGetById
   */
  static readonly IngredientControllerGetByIdPath = '/ingredient/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ingredientControllerGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingredientControllerGetById$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Ingredient>> {

    const rb = new RequestBuilder(this.rootUrl, IngredientService.IngredientControllerGetByIdPath, 'get');
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
   * To access the full response (for headers, for example), `ingredientControllerGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ingredientControllerGetById(params: {
    id: string;

  }): Observable<Ingredient> {

    return this.ingredientControllerGetById$Response(params).pipe(
      map((r: StrictHttpResponse<Ingredient>) => r.body as Ingredient)
    );
  }

}
