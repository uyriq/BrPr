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
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
            fixed
            footer={
                <Footer height={60}>
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
                <Header height={70}>
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
            <Center>{children}</Center>
        </AppShell>
    )
}

ApplicationContainer.propTypes = {
    children: PropTypes.any,
}
