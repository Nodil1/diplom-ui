import {DriverRepositoryTest} from "~/repositories/test/DriverRepositoryTest";
import {TaskRepositoryTest} from "~/repositories/test/TaskRepositoryTest";
import {RouteRepositoryTest} from "~/repositories/test/RouteRepositoryTest";
import {WorkerRepositoryApi} from "~/repositories/api/WorkerRepositoryApi";
import {TaskRepositoryApi} from "~/repositories/api/TaskRepositoryApi";
import {RouteRepositoryApi} from "~/repositories/api/RouteRepositoryApi";

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            'driverRepo': new WorkerRepositoryApi(),
            'taskRepo': new TaskRepositoryApi(),
            'routeRepo': new RouteRepositoryApi()

        },
    };
})