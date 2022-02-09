import { enumType, objectType } from "nexus";
import { Place } from "./Place";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.field("role", { type: Role });
    t.list.field("bookmarks", {
      type: Place,
      async resolve(_parent, _args, context) {
        return await context.prisma.user
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .bookmarks();
      },
    });
  },
});

const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN"],
});
