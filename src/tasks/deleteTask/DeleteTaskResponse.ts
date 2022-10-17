import { Errors } from '../../shared/application/Errors';
import { Either, Result } from '../../shared/application/Result';
import { CreateUserErrors } from './DeleteTaskErrors';

type CreateUserReponse = Either<
    CreateUserErrors.EmailAlreadyExistsError | Errors.UnexpectedError,
    Result<void>
>;

export default CreateUserReponse;
