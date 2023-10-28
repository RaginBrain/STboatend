'use strict';

module.exports = {
  register({ strapi }) {
    const extension = ({ nexus }) => ({
      typeDefs: `
        extend type Query {
          getTripps(date: String, location: String, offset: Int! = 0): [Tripp]
        }
      `,
      resolvers: {
        Query: {
          getTripps: async (parent, args) => {
            const { date, location, offset } = args;
            let filter = {};

            if (date) {
              filter.date = date;
            }
            if (location) {
              filter.location = location;
            }
            
            // Incorporating offset for pagination
            filter._start = offset;
            return await strapi.services.tripp.find(filter);
          }
        }
      }
    });

    strapi.plugin('graphql').service('extension').use(extension);
  },
  bootstrap(/*{ strapi }*/) {},
}
