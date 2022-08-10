import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMovieArgs } from "./args/DeleteManyMovieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMovieResolver {
    deleteManyMovie(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMovieArgs): Promise<AffectedRowsOutput>;
}
