export const resolvers = {
  Query: {
    places: async (_parent, _args, context) =>
      await context.prisma.place.findMany(),
  },
};
