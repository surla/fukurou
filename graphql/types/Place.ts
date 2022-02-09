import { objectType, extendType } from "nexus";
import { User } from "./User";

export const Place = objectType({
  name: "Place",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("location");
    t.string("description");
    t.string("category");
    t.string("imageUrl");
    t.list.field("users", {
      type: User,
      async resolve(_parent, _args, context) {
        return await context.prisma.place
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users();
      },
    });
  },
});
