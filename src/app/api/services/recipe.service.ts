/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation recipeControllerFindAll
   */
  static readonly RecipeControllerFindAllPath = '/recipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeControllerFindAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeControllerFindAll$Response(params?: {

  }): Observable<StrictHttpResponse<Array<Recipe>>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.RecipeControllerFindAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Recipe>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recipeControllerFindAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeControllerFindAll(params?: {

  }): Observable<Array<Recipe>> {

    return this.recipeControllerFindAll$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Recipe>>) => r.body as Array<Recipe>)
    );
  }

  /**
   * Path part for operation addRecipe
   */
  static readonly AddRecipePath = '/recipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addRecipe()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRecipe$Response(params: {

    body: Recipe
  }): Observable<StrictHttpResponse<Recipe>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.AddRecipePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Recipe>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addRecipe$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addRecipe(params: {

    body: Recipe
  }): Observable<Recipe> {

    return this.addRecipe$Response(params).pipe(
      map((r: StrictHttpResponse<Recipe>) => r.body as Recipe)
    );
  }

  /**
   * Path part for operation incrementRecipeHits
   */
  static readonly IncrementRecipeHitsPath = '/recipe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementRecipeHits()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incrementRecipeHits$Response(params: {

    body: Recipe
  }): Observable<StrictHttpResponse<Recipe>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.IncrementRecipeHitsPath, 'patch');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Recipe>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `incrementRecipeHits$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incrementRecipeHits(params: {

    body: Recipe
  }): Observable<Recipe> {

    return this.incrementRecipeHits$Response(params).pipe(
      map((r: StrictHttpResponse<Recipe>) => r.body as Recipe)
    );
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/recipe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<Recipe>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.FindByIdPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Recipe>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: string;

  }): Observable<Recipe> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<Recipe>) => r.body as Recipe)
    );
  }

  /**
   * Path part for operation recipeControllerUpdate
   */
  static readonly RecipeControllerUpdatePath = '/recipe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeControllerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeControllerUpdate$Response(params: {
    id: string;

    body: Recipe
  }): Observable<StrictHttpResponse<Recipe>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.RecipeControllerUpdatePath, 'put');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Recipe>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recipeControllerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recipeControllerUpdate(params: {
    id: string;

    body: Recipe
  }): Observable<Recipe> {

    return this.recipeControllerUpdate$Response(params).pipe(
      map((r: StrictHttpResponse<Recipe>) => r.body as Recipe)
    );
  }

  /**
   * Path part for operation recipeControllerRemove
   */
  static readonly RecipeControllerRemovePath = '/recipe/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recipeControllerRemove()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeControllerRemove$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RecipeService.RecipeControllerRemovePath, 'delete');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recipeControllerRemove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recipeControllerRemove(params?: {

  }): Observable<void> {

    return this.recipeControllerRemove$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
