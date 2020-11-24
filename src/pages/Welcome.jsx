import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useAccess, Access, useModel } from 'umi';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome = () => {
  const access = useAccess();
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log('initialState', initialState, 'setInitialState', setInitialState);
  const { user, fetchUser } = useModel('useAuthModel', model => ({ user: model.user, fetchUser: model.fetchUser }));
  console.log('user', user, fetchUser);
  
  return (
    <PageContainer>
      <Access
        accessible={access.canRead}
        fallback={<div>Can not read foo content.</div>}
      >
        <Card>
          <Alert
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 24,
            }}
            type="success"
            message="更快更强的重型组件，已经发布。"
          />
          <Typography.Text strong>
            高级表格{' '}
            <a
              href="https://procomponents.ant.design/components/table"
              rel="noopener noreferrer"
              target="__blank"
            >
              欢迎使用
            </a>
          </Typography.Text>
          <CodePreview>yarn add @ant-design/pro-table</CodePreview>
          <Typography.Text
            strong
            style={{
              marginBottom: 12,
            }}
          >
            高级布局{' '}
            <a
              href="https://procomponents.ant.design/components/layout"
              rel="noopener noreferrer"
              target="__blank"
            >
              欢迎使用
            </a>
          </Typography.Text>
          <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
        </Card>
      </Access>
    </PageContainer>
  );
}

export default Welcome;
