import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieArgs } from "./args/FindUniqueMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class FindUniqueMovieResolver {
    movie(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMovieArgs): Promise<Movie | null>;
}
