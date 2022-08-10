import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMovieArgs } from "./args/UpdateManyMovieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMovieResolver {
    updateManyMovie(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMovieArgs): Promise<AffectedRowsOutput>;
}
