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

                    marginLeft: '10px',
                    marginRight: '10px',
                    marginTop: '0%',
                    marginBottom: '0%',
                },
            }}
            fixed
            footer={
                <Footer height={60} p="md">
                    <Group position="center" spacing="xl">
                        <Text size="sm">
                            <span style={{ fontWeight: 'bold' }}>🕛 matrix path finder cyberpunk 2077 alike</span>
                        </Text>
                        <Text size="sm">
                            <span style={{ fontWeight: 'bold' }}>🎆 Breach Protocol/QuickHack mini game </span>
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
