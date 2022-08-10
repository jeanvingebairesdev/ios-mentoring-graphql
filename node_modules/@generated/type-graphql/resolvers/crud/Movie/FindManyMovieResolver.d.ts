import { GraphQLResolveInfo } from "graphql";
import { FindManyMovieArgs } from "./args/FindManyMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class FindManyMovieResolver {
    movies(ctx: any, info: GraphQLResolveInfo, args: FindManyMovieArgs): Promise<Movie[]>;
}
