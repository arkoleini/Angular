export class LoggingService {
    LogStatusChange(status: string){
        console.log('A server changed, new status: ' + status);
    }
}