import PropTypes from 'prop-types'
import { AppShell, Footer, Group, Header, Text, Center } from '@mantine/core'

import { customColors } from './constants-colors'

export const ApplicationContainer = ({ children }) => {
    return (
        <AppShell
            styles={{
                main: {
                    background: customColors.backgroundMain,
                    width: '100vw',
                    height: '100vh',

                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '3%',
                    marginBottom: '1%',

                    border: customColors.stackLineBorder1,
                },
            }}
            fixed
            footer={
                <Footer height={60} p="md">
                    <Group position="center" spacing="xl">
                        <Text size="sm">
                            <span style={{ fontWeight: 'bolder' }}>🕛 matrix path finder for cyberpunk 2077 </span>
                        </Text>
                        <Text size="sm">
                            <span style={{ fontWeight: 'bolder' }}>🎆 Breach Protocol/QuickHack mini games </span>
                        </Text>
                    </Group>
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <Center>
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <Text size="lg" weight="bolder">
                                Practice Breach Protocol
                            </Text>
                        </div>
                    </Center>
                </Header>
            }
        >
            {children}
        </AppShell>
    )
}

ApplicationContainer.propTypes = {
    children: PropTypes.any,
}
