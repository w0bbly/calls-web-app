export class CallDTO {
    public callerNumber: string;
    public calleeNumber: string;
    public startTime: string;
    public endTime: string;
    public type: string;
}

export class StatsDTO {
    public dateOfStats: string;
    public totalCallTimeInbound: number;
    public totalCallTimeOutbound: number;
    public totalCall: number;
    public numberOfCallsByCallerNumber: StatsHelperDTO[];
    public numberOfCallsByCalleeNumber: StatsHelperDTO[];
    public totalCallCost: number;
}

export class StatsHelperDTO {
    public number: string;
    public numberOfCalls: number;
}