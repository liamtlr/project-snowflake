Broadcasts = new Mongo.Collection('broadcasts')

Broadcasts.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	// update: function(userId, doc) {
	// 	return !!userId;
	// },
  // remove: function(userId, doc) {
  //   return !!userId;
  // }
});

// Skills = new SimpleSchema({
//   skill: {
//     type: String
//   }
// });

BroadcastsSchema = new SimpleSchema({
  created_by: {
    type: String,
    label: 'Created by:',
    optional: true,
    autoValue: function() {
      if(this.isInsert) {
        return this.userId;
      } else {
        this.unset();
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  body: {
    type: String,
    label: 'Contact volunteers:',
    autoform: {
          afFieldInput: {
            type: "textarea"
          }
        }
  },
  createdAt: {
    type: Date,
    label: "Created At:",
    autoValue: function() {
    return new Date()
    },
    autoform: {
          type: "hidden"
      }
    },
  // date: {
  //   type: Date,
  //   label: "Date of Project:",
  //   optional: true,
  //   autoform: {
  //    afFieldInput: {
  //      type: "date"
  //    }
  //  }
  // },
	// time: {
	// 	type: String,
	// 	label: "Time:",
	// 	optional: true,
	// 	autoform: {
	// 	 afFieldInput: {
	// 		 type: "time"
	// 	 }
	//  }
	// },
  // minPeople: {
  //   type: Number,
  //   label: 'Minumum People Required'
  // },
  // maxPeople: {
  //   type: Number,
  //   label: 'Maximum People Allowed'
  // },
  // skills: {
  //   type: [Skills]
  // },
  // volunteers: {
  //   type: [String],
  //   optional: true,
  //   autoform: {
  //     type: "hidden"
  // 	}
	// },
	// volunteersEmail: {
	//   type: [String],
	//   optional: true,
	//   autoform: {
	//     type: "hidden"
  //
	//   }
	// }
});

Broadcasts.attachSchema(BroadcastsSchema);
