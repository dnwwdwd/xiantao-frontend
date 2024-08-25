import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'C1own';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'homieMatching',
          title: '厚密匹配',
          href: 'http://hm.hejiajun.icu',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'C1own博客',
          href: 'https://blog.hejiajun.icu',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> C1own
            </>
          ),
          href: 'https://github.com/dnwwdwd',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
