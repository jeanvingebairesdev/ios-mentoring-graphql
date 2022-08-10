import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieArgs } from "./args/AggregateMovieArgs";
import { AggregateMovie } from "../../outputs/AggregateMovie";
export declare class AggregateMovieResolver {
    aggregateMovie(ctx: any, info: GraphQLResolveInfo, args: AggregateMovieArgs): Promise<AggregateMovie>;
}
