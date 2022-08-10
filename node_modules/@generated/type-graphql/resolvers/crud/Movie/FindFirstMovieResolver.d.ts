import { GraphQLResolveInfo } from "graphql";
import { FindFirstMovieArgs } from "./args/FindFirstMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class FindFirstMovieResolver {
    findFirstMovie(ctx: any, info: GraphQLResolveInfo, args: FindFirstMovieArgs): Promise<Movie | null>;
}
