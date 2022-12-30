import { useRef, useState } from 'react'
import { ActionIcon, Box, Group, Tabs, Text, Title, UnstyledButton, useMantineTheme, Center } from '@mantine/core'
import { useMediaQuery, useIntersection, useScrollIntoView } from '@mantine/hooks'
import { Plus } from 'tabler-icons-react'

export default function Home() {
    const [activeTab, setActiveTab] = useState('matrix')
    const theme = useMantineTheme()
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl.toFixed()}px)`)
    const direction = largeScreen ? 'row' : 'column'
    const width = largeScreen ? '30%' : '90%'
    const padding = largeScreen ? '80vw' : '10vw'
    const style = largeScreen
        ? {
              position: 'absolute',
              top: '12vh',
          }
        : {
              position: 'unset',
              width: '100%',
          }

    const { scrollIntoView: scrollIntoViewUp, targetRef: matrixRef } = useScrollIntoView({ offset: 30 })
    const { scrollIntoView: scrollIntoViewDown, targetRef: seqRef } = useScrollIntoView({ offset: 60 })

    return (
        <>
            <Box style={style}>
                {!largeScreen && (
                    <Tabs
                        value={activeTab}
                        onTabChange={setActiveTab}
                        sx={{
                            visibility: largeScreen ? 'hidden' : 'visible',
                            position: 'fixed',
                            top: '8vh',
                            left: '3vw',
                            background: 'black',
                            width: '92vw',
                            paddingRight: padding,
                        }}
                    >
                        <Tabs.List>
                            <Tabs.Tab value="matrix" onClick={() => scrollIntoViewUp({ alignment: 'center' })}>
                                matrix
                            </Tabs.Tab>
                            <Tabs.Tab value="sequences" onClick={() => scrollIntoViewDown({ alignment: 'center' })}>
                                sequences
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="matrix">Matrix panel</Tabs.Panel>
                        <Tabs.Panel value="sequences">Sequences panel</Tabs.Panel>
                    </Tabs>
                )}
                <Group mt="10px" direction={direction}>
                    <Group
                        ref={matrixRef}
                        style={{
                            backgroundColor: theme.colors.dark[9],
                            width: width,
                            height: '90vh',

                            marginTop: '8vh',
                            marginBottom: '8vh',
                        }}
                        mx="auto"
                        direction="column"
                    >
                        <Group position="apart">
                            <Plus />
                        </Group>

                        <Group mx="auto" style={{ width: '50vw', justifyContent: 'space-between' }} position="right">
                            <Plus />
                        </Group>
                    </Group>
                    <Group
                        ref={seqRef}
                        style={{
                            backgroundColor: theme.colors.dark[9],
                            width: largeScreen ? '55%' : '90%',
                            marginTop: '8vh',
                            height: '90vh',
                        }}
                        mx="auto"
                        direction="column"
                    >
                        <Group position="apart">
                            <Plus />
                        </Group>

                        <Group mx="auto" style={{ width: '50vw', justifyContent: 'space-between' }} position="right">
                            <Plus />
                        </Group>
                    </Group>
                </Group>
            </Box>
        </>
    )
}
