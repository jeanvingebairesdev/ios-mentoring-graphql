import { GraphQLResolveInfo } from "graphql";
import { GroupByMovieArgs } from "./args/GroupByMovieArgs";
import { MovieGroupBy } from "../../outputs/MovieGroupBy";
export declare class GroupByMovieResolver {
    groupByMovie(ctx: any, info: GraphQLResolveInfo, args: GroupByMovieArgs): Promise<MovieGroupBy[]>;
}
