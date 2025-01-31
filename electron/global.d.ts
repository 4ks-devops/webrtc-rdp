
declare var Ayame: typeof import('@open-ayame/ayame-web-sdk')

declare type KeyAction = { target: { id: string, name?: string, dispaly_id?: string }, action: string, key: string, modifiers: string[] };
declare type MouseAction = { target: { id: string, name?: string, dispaly_id?: string }, action: string, button: number, x: number, y: number };

declare var RDP: {
    getDisplayStreams(types: string[]): Promise<{ id: string, name: string, dispaly_id: string }[]>
    sendMouse(mouse: MouseAction): Primise<void>
    sendKey(key: KeyAction): Primise<void>
    streamFromPoint(params: { target: any, x: number, y: number }): Promise<any>
}

declare interface StreamSpec {
    id: string
    name: string
    hasAudio?: boolean
}

declare interface ConnectionInfo {
    id: number
    name: string
    conn: PublisherConnection
    permanent: boolean
}

declare interface StreamProvider {
    startStream: ((cm: ConnectionManager, spec: StreamSpec, permanent: boolean) => Promise<ConnectionInfo>)
    getStreams?: (() => Promise<StreamSpec[]>)
}

declare interface DataChannelInfo {
    onmessage?: ((ch: RTCDataChannel, ev: MessageEvent) => void)
    onopen?: ((ch: RTCDataChannel, ev: RTCDataChannelEvent) => void)
    onclose?: ((ch: RTCDataChannel, ev: Event) => void)
    ch?: RTCDataChannel
}

declare interface DeviceSettings {
    name?: string
    roomId: string
    publishRoomId?: string
    signalingKey: string | null
    userAgent: string
    token: string
}
