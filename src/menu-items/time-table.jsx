import { FormattedMessage } from 'react-intl';
import { I24Support, MessageProgramming } from 'iconsax-react';
const icons = {
  maintenance: MessageProgramming,
  contactus: I24Support
};
const timetable = {
  id: 'group-pages',
  type: 'group',
  children: [
    {
      id: 'TimeTable',
      title: <FormattedMessage id="Time Table" />,
      type: 'collapse',
      icon: icons.maintenance,
      children: [
        {
          id: 'View',
          title: <FormattedMessage id="View" />,
          type: 'item',
          url: '/timetable/view',
          breadcrumbs: false
        }

      ]
    }
  ]
};

export default timetable;
